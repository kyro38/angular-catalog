/**
 * PCB API
 * This Web site allows you to learn and test our PCB API.  **What’s new**:   * **Content: GET {cultureCode}/{oid}/contents : Add fallback for LNK content type: generate LNK data for level 5 oid from their filtered level 7**   * Add new option “exactSearch” for the endpoint Catalog : GET /{cultureCode}/search/autocomplete/{term}      * Add new option “fallback” to improve research on ppimage4online for endpoint :    * Content: GET /{cultureCode}/{oid}/ppimage4online    * Content: POST /{cultureCode}/oids/ppimage4online    * Content type HST returns new field “crestSort” to specify if a companion is Top Recommended for an Host’s product (we recommend to use ‘crestsort’ instead of ‘recommended’)   * Content type HST returns new fields “level5oid”, “level5name” for each Host’s Product to provide Series\' information   * Content type HST returns new branches with the list of Host Series (option: ShowHostSeries): HST_SERIES_OIDS and HST_SERIES    * Add new parameter “hidePath” and “filter” for endpoints: * Content: POST /{cultureCode}/products/contents * Content: POST /{cultureCode}/oids/contents   * Content type LNK returns new field “crestSort” to specify if the companion is Top recommended or not   * Retrieve the primary product image for online purpose * Content: GET /{cultureCode}/{oid}/ppimage4online * Content: POST /{cultureCode}/oids/ppimage4online   * *AUTOCOMPLETE works with localized prodname*  * *Content type VID provides Video – Animation in addition of Video corporate and Product Overview*  * New API route * Content: POST /{cultureCode}/oids/contents returns the contents of multiple node according to given cultureCode, statuses and content types  * Provide Product Line information at SKU Level  * Provide PLC information on product for all catalogues:  * Content: GET /{cultureCode}/{oid}/contents (contentType: MDA) * Content: GET /{cultureCode}/products/{productNumber}/contents (contentType: MDA)  * Catalog: GET /{cultureCode}/search/autocomplete/{term} add new parameters ‘productPatterns’, ‘includedBranchHeadOids’, ‘excludedBranchHeadOids’  * Catalog: GET /{cultureCode}/{oid}/productNumbers add new parameter ‘productPatterns’  * Add new type of content (RC) Recommended Companions for: * Catalog: GET /{cultureCode}/{oid}/contents * Catalog: GET /{cultureCode}/products/{productNumber}/contents  **Requests identification & authorization**:  All the requests to the PCB API *must* be identified using at least one token. There are two kinds of tokens:  * The **Application Token** which helps to identity which application is using the API (e.g. PCB, Swagger, ...). This token, if present, must be put in the `X-Application-Token` HTTP header for each request made to the API. In order to connect your application to the API, you need an application token. You can request one at http://hppcb.freshdesk.com/support/home * The **User Token** which are specific to user, whatever application they\'re using. The token contains user information + active permissions, for instance the right to see pre-release products. These tokens are conventionally not disclosed to the end users, but rather used by applications (e.g. via a login form). This token, if present, must be put in the `Authentication` HTTP header for each request, using the [Bearer Authentication](https://swagger.io/docs/specification/authentication/bearer-authentication) convention. If you hold your user token, you can use it in Swagger using the *\"Authorize\"* button (referred as \'api_key)\'.   The API will refuse any request that: * Does not hold any application **or** user token. * Provide tokens that are malformed, invalid or expired.  Through this swagger web site, you **should not use a token application** (swagger has its own).  **In Case of problem to access PCB API**, please submit a ticket through the URL:  http://hppcb.freshdesk.com/support/tickets/new  **Information about common types**: * **Node status** (updated once a day)  * L (Live)  * O (Obsolete)  * F (Future/pre-released)  * **Culture code / Catalog** :  * matches __[a-z]{2}-[a-z]{2}__.  e.g. ww-en, us-en,... Full list at **_/catalogs**  * **Content type**  * MSG (messaging)  * TSP (tech specs)  * SYS (system)  * LOG  * PIC  * OTH  * IMG (images urls, with metadatas)   * DOC (documents urls like TechSpecs, ...)   * LNK (linked products, compatibilities, ...)   * HST (companion\'s hosts)   * VID (videos)   * RAT (Ratings Data)   * MDA (Meta Data, PLC Date)    * RC (Recommended Companions)  * **Hierarchy paradigm**  * Q, Quick : **Level1/Product Category** -> **Level5/Serie** -> **Level7/SKU**  * F, Full: All levels
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface NodeProductsBE { 
    lastModificationDate: string;
    totalResults: number;
    productNumbers: Array<string>;
}

