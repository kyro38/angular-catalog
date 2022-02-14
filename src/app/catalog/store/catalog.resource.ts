import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map, Observable, switchMap, withLatestFrom } from 'rxjs';
import { CatalogService, ContentsService } from 'src/app/api';
import { CatalogParser } from './catalog.parser';
import { Catalog, CatalogState, Category, Content, ContentType } from './catalog.reducer';
import { selectCurrentCatalog, selectProductStatus } from './catalog.selector';

@Injectable({ providedIn: 'root' })
export class CatalogResource {
  constructor(
    private readonly catalogService: CatalogService,
    private readonly contentService: ContentsService,
    private readonly catalogParser: CatalogParser,
    private readonly store: Store<CatalogState>
  ) {}

  getCatalogs(): Observable<Array<Catalog>> {
    return this.catalogService.catalogsGet().pipe(map((c) => this.catalogParser.parseCatalog(c)));
  }

  getCategories(): Observable<Array<Category>> {
    return this.store.select(selectCurrentCatalog).pipe(
      filter((catalogCode): catalogCode is string => catalogCode !== undefined),
      withLatestFrom(this.store.select(selectProductStatus)),
      switchMap(([catalogCode, status]) =>
        this.catalogService.cultureCodeOidChildrenGet({
          cultureCode: catalogCode,
          oid: '0',
          hierarchyParadigm: 'F',
          status,
        })
      ),
      map((nodes) => this.catalogParser.parseCategories(nodes))
    );
  }

  getSubCategories(category: Category): Observable<{ oid: number; children: Array<Category> }> {
    return this.catalogService
      .cultureCodeOidChildrenGet({
        cultureCode: category.cultureCode,
        oid: `${category.oid}`,
        hierarchyParadigm: 'F',
        status: category.status,
      })
      .pipe(
        map((response) => {
          return {
            oid: category.oid,
            children: this.catalogParser.parseCategories(response),
          };
        })
      );
  }

  getContent(category: Category, contentType: ContentType): Observable<Content[ContentType]> {
    return this.store.select(selectProductStatus).pipe(
      switchMap((status) =>
        this.contentService.cultureCodeOidContentsGet({
          oid: `${category.oid}`,
          cultureCode: category.cultureCode,
          status,
          contentType: new Set([contentType]),
        })
      ),
      map((content) => this.catalogParser.parseContent(content, contentType))
    );
  }
}
