/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Article(entitySet) {
        /// <summary>
        /// Represents the Article entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this article.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this article.
        /// </field>
        /// <field name="Title" type="String">
        /// Gets or sets the title for this article.
        /// </field>
        /// <field name="SampleSize" type="Number">
        /// Gets or sets the sampleSize for this article.
        /// </field>
        /// <field name="Results" type="msls.EntityCollection" elementType="msls.application.Result">
        /// Gets the results for this article.
        /// </field>
        /// <field name="ArticleType" type="msls.application.ArticleType">
        /// Gets or sets the articleType for this article.
        /// </field>
        /// <field name="Authors" type="msls.EntityCollection" elementType="msls.application.Author">
        /// Gets the authors for this article.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this article.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this article.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this article.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this article.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this article.
        /// </field>
        /// <field name="details" type="msls.application.Article.Details">
        /// Gets the details for this article.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ArticleType(entitySet) {
        /// <summary>
        /// Represents the ArticleType entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this articleType.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this articleType.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this articleType.
        /// </field>
        /// <field name="Articles" type="msls.EntityCollection" elementType="msls.application.Article">
        /// Gets the articles for this articleType.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this articleType.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this articleType.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this articleType.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this articleType.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this articleType.
        /// </field>
        /// <field name="details" type="msls.application.ArticleType.Details">
        /// Gets the details for this articleType.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Author(entitySet) {
        /// <summary>
        /// Represents the Author entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this author.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this author.
        /// </field>
        /// <field name="Article" type="msls.application.Article">
        /// Gets or sets the article for this author.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this author.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this author.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this author.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this author.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this author.
        /// </field>
        /// <field name="details" type="msls.application.Author.Details">
        /// Gets the details for this author.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Result(entitySet) {
        /// <summary>
        /// Represents the Result entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this result.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this result.
        /// </field>
        /// <field name="Article" type="msls.application.Article">
        /// Gets or sets the article for this result.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this result.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this result.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this result.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this result.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this result.
        /// </field>
        /// <field name="details" type="msls.application.Result.Details">
        /// Gets the details for this result.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Articles" type="msls.EntitySet">
        /// Gets the Articles entity set.
        /// </field>
        /// <field name="ArticleTypes" type="msls.EntitySet">
        /// Gets the ArticleTypes entity set.
        /// </field>
        /// <field name="Authors" type="msls.EntitySet">
        /// Gets the Authors entity set.
        /// </field>
        /// <field name="Results" type="msls.EntitySet">
        /// Gets the Results entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Article: $defineEntity(Article, [
            { name: "Id", type: Number },
            { name: "Title", type: String },
            { name: "SampleSize", type: Number },
            { name: "Results", kind: "collection", elementType: Result },
            { name: "ArticleType", kind: "reference", type: ArticleType },
            { name: "Authors", kind: "collection", elementType: Author },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ArticleType: $defineEntity(ArticleType, [
            { name: "Id", type: Number },
            { name: "Description", type: String },
            { name: "Articles", kind: "collection", elementType: Article },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Author: $defineEntity(Author, [
            { name: "Id", type: Number },
            { name: "Article", kind: "reference", type: Article },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Result: $defineEntity(Result, [
            { name: "Id", type: Number },
            { name: "Article", kind: "reference", type: Article },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "Articles", elementType: Article },
            { name: "ArticleTypes", elementType: ArticleType },
            { name: "Authors", elementType: Author },
            { name: "Results", elementType: Result }
        ], [
            {
                name: "Articles_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Articles },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Articles(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ArticleTypes_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ArticleTypes },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ArticleTypes(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Authors_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Authors },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Authors(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Results_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Results },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Results(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
