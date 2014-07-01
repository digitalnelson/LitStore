/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditArticle.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditArticle
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditArticle,
            data: lightSwitchApplication.AddEditArticle,
            value: lightSwitchApplication.AddEditArticle
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditArticle,
            data: lightSwitchApplication.AddEditArticle,
            value: lightSwitchApplication.Article
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditArticle,
            data: lightSwitchApplication.Article,
            value: lightSwitchApplication.Article
        },
        Title: {
            _$class: msls.ContentItem,
            _$name: "Title",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditArticle,
            data: lightSwitchApplication.Article,
            value: String
        },
        SampleSize: {
            _$class: msls.ContentItem,
            _$name: "SampleSize",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditArticle,
            data: lightSwitchApplication.Article,
            value: Number
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditArticle,
            data: lightSwitchApplication.Article,
            value: lightSwitchApplication.Article
        },
        ArticleType: {
            _$class: msls.ContentItem,
            _$name: "ArticleType",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditArticle,
            data: lightSwitchApplication.Article,
            value: lightSwitchApplication.ArticleType
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ArticleType",
            screen: lightSwitchApplication.AddEditArticle,
            data: lightSwitchApplication.ArticleType,
            value: lightSwitchApplication.ArticleType
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditArticle
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditArticle, {
        /// <field>
        /// Called when a new AddEditArticle screen is created.
        /// <br/>created(msls.application.AddEditArticle screen)
        /// </field>
        created: [lightSwitchApplication.AddEditArticle],
        /// <field>
        /// Called before changes on an active AddEditArticle screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditArticle screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditArticle],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditArticle().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditArticle().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditArticle().findContentItem("left"); }],
        /// <field>
        /// Called after the Title content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Title_postRender: [$element, function () { return new lightSwitchApplication.AddEditArticle().findContentItem("Title"); }],
        /// <field>
        /// Called after the SampleSize content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SampleSize_postRender: [$element, function () { return new lightSwitchApplication.AddEditArticle().findContentItem("SampleSize"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditArticle().findContentItem("right"); }],
        /// <field>
        /// Called after the ArticleType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ArticleType_postRender: [$element, function () { return new lightSwitchApplication.AddEditArticle().findContentItem("ArticleType"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditArticle().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.BrowseArticles.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseArticles
        },
        ArticleList: {
            _$class: msls.ContentItem,
            _$name: "ArticleList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseArticles,
            data: lightSwitchApplication.BrowseArticles,
            value: lightSwitchApplication.BrowseArticles
        },
        Articles: {
            _$class: msls.ContentItem,
            _$name: "Articles",
            _$parentName: "ArticleList",
            screen: lightSwitchApplication.BrowseArticles,
            data: lightSwitchApplication.BrowseArticles,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseArticles,
                _$entry: {
                    elementType: lightSwitchApplication.Article
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Articles",
            screen: lightSwitchApplication.BrowseArticles,
            data: lightSwitchApplication.Article,
            value: lightSwitchApplication.Article
        },
        Title: {
            _$class: msls.ContentItem,
            _$name: "Title",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseArticles,
            data: lightSwitchApplication.Article,
            value: String
        },
        SampleSize: {
            _$class: msls.ContentItem,
            _$name: "SampleSize",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseArticles,
            data: lightSwitchApplication.Article,
            value: Number
        },
        ArticleType: {
            _$class: msls.ContentItem,
            _$name: "ArticleType",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseArticles,
            data: lightSwitchApplication.Article,
            value: lightSwitchApplication.ArticleType
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseArticles
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseArticles, {
        /// <field>
        /// Called when a new BrowseArticles screen is created.
        /// <br/>created(msls.application.BrowseArticles screen)
        /// </field>
        created: [lightSwitchApplication.BrowseArticles],
        /// <field>
        /// Called before changes on an active BrowseArticles screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseArticles screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseArticles],
        /// <field>
        /// Called after the ArticleList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ArticleList_postRender: [$element, function () { return new lightSwitchApplication.BrowseArticles().findContentItem("ArticleList"); }],
        /// <field>
        /// Called after the Articles content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Articles_postRender: [$element, function () { return new lightSwitchApplication.BrowseArticles().findContentItem("Articles"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseArticles().findContentItem("rows"); }],
        /// <field>
        /// Called after the Title content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Title_postRender: [$element, function () { return new lightSwitchApplication.BrowseArticles().findContentItem("Title"); }],
        /// <field>
        /// Called after the SampleSize content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SampleSize_postRender: [$element, function () { return new lightSwitchApplication.BrowseArticles().findContentItem("SampleSize"); }],
        /// <field>
        /// Called after the ArticleType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ArticleType_postRender: [$element, function () { return new lightSwitchApplication.BrowseArticles().findContentItem("ArticleType"); }]
    });

    lightSwitchApplication.ViewArticle.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewArticle
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewArticle,
            data: lightSwitchApplication.ViewArticle,
            value: lightSwitchApplication.ViewArticle
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewArticle,
            data: lightSwitchApplication.ViewArticle,
            value: lightSwitchApplication.Article
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewArticle,
            data: lightSwitchApplication.Article,
            value: lightSwitchApplication.Article
        },
        Title: {
            _$class: msls.ContentItem,
            _$name: "Title",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewArticle,
            data: lightSwitchApplication.Article,
            value: String
        },
        SampleSize: {
            _$class: msls.ContentItem,
            _$name: "SampleSize",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewArticle,
            data: lightSwitchApplication.Article,
            value: Number
        },
        ArticleType: {
            _$class: msls.ContentItem,
            _$name: "ArticleType",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewArticle,
            data: lightSwitchApplication.Article,
            value: lightSwitchApplication.ArticleType
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewArticle,
            data: lightSwitchApplication.Article,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewArticle,
            data: lightSwitchApplication.Article,
            value: lightSwitchApplication.Article
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewArticle,
            data: lightSwitchApplication.Article,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewArticle,
            data: lightSwitchApplication.Article,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewArticle,
            data: lightSwitchApplication.Article,
            value: Date
        },
        Results1: {
            _$class: msls.ContentItem,
            _$name: "Results1",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewArticle,
            data: lightSwitchApplication.ViewArticle,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewArticle,
                _$entry: {
                    elementType: lightSwitchApplication.Result
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Results1",
            screen: lightSwitchApplication.ViewArticle,
            data: lightSwitchApplication.Result,
            value: lightSwitchApplication.Result
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewArticle,
            data: lightSwitchApplication.Result,
            value: Number
        },
        CreatedBy1: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewArticle,
            data: lightSwitchApplication.Result,
            value: String
        },
        Created1: {
            _$class: msls.ContentItem,
            _$name: "Created1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewArticle,
            data: lightSwitchApplication.Result,
            value: Date
        },
        Authors1: {
            _$class: msls.ContentItem,
            _$name: "Authors1",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewArticle,
            data: lightSwitchApplication.ViewArticle,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewArticle,
                _$entry: {
                    elementType: lightSwitchApplication.Author
                }
            }
        },
        rows1: {
            _$class: msls.ContentItem,
            _$name: "rows1",
            _$parentName: "Authors1",
            screen: lightSwitchApplication.ViewArticle,
            data: lightSwitchApplication.Author,
            value: lightSwitchApplication.Author
        },
        Id1: {
            _$class: msls.ContentItem,
            _$name: "Id1",
            _$parentName: "rows1",
            screen: lightSwitchApplication.ViewArticle,
            data: lightSwitchApplication.Author,
            value: Number
        },
        CreatedBy2: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy2",
            _$parentName: "rows1",
            screen: lightSwitchApplication.ViewArticle,
            data: lightSwitchApplication.Author,
            value: String
        },
        Created2: {
            _$class: msls.ContentItem,
            _$name: "Created2",
            _$parentName: "rows1",
            screen: lightSwitchApplication.ViewArticle,
            data: lightSwitchApplication.Author,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewArticle
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewArticle, {
        /// <field>
        /// Called when a new ViewArticle screen is created.
        /// <br/>created(msls.application.ViewArticle screen)
        /// </field>
        created: [lightSwitchApplication.ViewArticle],
        /// <field>
        /// Called before changes on an active ViewArticle screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewArticle screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewArticle],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewArticle().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewArticle().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewArticle().findContentItem("left"); }],
        /// <field>
        /// Called after the Title content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Title_postRender: [$element, function () { return new lightSwitchApplication.ViewArticle().findContentItem("Title"); }],
        /// <field>
        /// Called after the SampleSize content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SampleSize_postRender: [$element, function () { return new lightSwitchApplication.ViewArticle().findContentItem("SampleSize"); }],
        /// <field>
        /// Called after the ArticleType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ArticleType_postRender: [$element, function () { return new lightSwitchApplication.ViewArticle().findContentItem("ArticleType"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewArticle().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewArticle().findContentItem("right"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewArticle().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewArticle().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewArticle().findContentItem("Modified"); }],
        /// <field>
        /// Called after the Results1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Results1_postRender: [$element, function () { return new lightSwitchApplication.ViewArticle().findContentItem("Results1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ViewArticle().findContentItem("rows"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.ViewArticle().findContentItem("Id"); }],
        /// <field>
        /// Called after the CreatedBy1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy1_postRender: [$element, function () { return new lightSwitchApplication.ViewArticle().findContentItem("CreatedBy1"); }],
        /// <field>
        /// Called after the Created1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created1_postRender: [$element, function () { return new lightSwitchApplication.ViewArticle().findContentItem("Created1"); }],
        /// <field>
        /// Called after the Authors1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Authors1_postRender: [$element, function () { return new lightSwitchApplication.ViewArticle().findContentItem("Authors1"); }],
        /// <field>
        /// Called after the rows1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows1_postRender: [$element, function () { return new lightSwitchApplication.ViewArticle().findContentItem("rows1"); }],
        /// <field>
        /// Called after the Id1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id1_postRender: [$element, function () { return new lightSwitchApplication.ViewArticle().findContentItem("Id1"); }],
        /// <field>
        /// Called after the CreatedBy2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy2_postRender: [$element, function () { return new lightSwitchApplication.ViewArticle().findContentItem("CreatedBy2"); }],
        /// <field>
        /// Called after the Created2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created2_postRender: [$element, function () { return new lightSwitchApplication.ViewArticle().findContentItem("Created2"); }]
    });

    lightSwitchApplication.AddEditArticleType.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditArticleType
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditArticleType,
            data: lightSwitchApplication.AddEditArticleType,
            value: lightSwitchApplication.AddEditArticleType
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditArticleType,
            data: lightSwitchApplication.AddEditArticleType,
            value: lightSwitchApplication.ArticleType
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditArticleType,
            data: lightSwitchApplication.ArticleType,
            value: lightSwitchApplication.ArticleType
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditArticleType,
            data: lightSwitchApplication.ArticleType,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditArticleType,
            data: lightSwitchApplication.ArticleType,
            value: lightSwitchApplication.ArticleType
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditArticleType
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditArticleType, {
        /// <field>
        /// Called when a new AddEditArticleType screen is created.
        /// <br/>created(msls.application.AddEditArticleType screen)
        /// </field>
        created: [lightSwitchApplication.AddEditArticleType],
        /// <field>
        /// Called before changes on an active AddEditArticleType screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditArticleType screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditArticleType],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditArticleType().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditArticleType().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditArticleType().findContentItem("left"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditArticleType().findContentItem("Description"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditArticleType().findContentItem("right"); }]
    });

    lightSwitchApplication.BrowseArticleTypes.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseArticleTypes
        },
        ArticleTypeList: {
            _$class: msls.ContentItem,
            _$name: "ArticleTypeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseArticleTypes,
            data: lightSwitchApplication.BrowseArticleTypes,
            value: lightSwitchApplication.BrowseArticleTypes
        },
        ArticleTypes: {
            _$class: msls.ContentItem,
            _$name: "ArticleTypes",
            _$parentName: "ArticleTypeList",
            screen: lightSwitchApplication.BrowseArticleTypes,
            data: lightSwitchApplication.BrowseArticleTypes,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseArticleTypes,
                _$entry: {
                    elementType: lightSwitchApplication.ArticleType
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "ArticleTypes",
            screen: lightSwitchApplication.BrowseArticleTypes,
            data: lightSwitchApplication.ArticleType,
            value: lightSwitchApplication.ArticleType
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseArticleTypes,
            data: lightSwitchApplication.ArticleType,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseArticleTypes,
            data: lightSwitchApplication.ArticleType,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseArticleTypes,
            data: lightSwitchApplication.ArticleType,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseArticleTypes
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseArticleTypes, {
        /// <field>
        /// Called when a new BrowseArticleTypes screen is created.
        /// <br/>created(msls.application.BrowseArticleTypes screen)
        /// </field>
        created: [lightSwitchApplication.BrowseArticleTypes],
        /// <field>
        /// Called before changes on an active BrowseArticleTypes screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseArticleTypes screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseArticleTypes],
        /// <field>
        /// Called after the ArticleTypeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ArticleTypeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseArticleTypes().findContentItem("ArticleTypeList"); }],
        /// <field>
        /// Called after the ArticleTypes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ArticleTypes_postRender: [$element, function () { return new lightSwitchApplication.BrowseArticleTypes().findContentItem("ArticleTypes"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseArticleTypes().findContentItem("rows"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseArticleTypes().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseArticleTypes().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.BrowseArticleTypes().findContentItem("Created"); }]
    });

    lightSwitchApplication.ViewArticleType.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewArticleType
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewArticleType,
            data: lightSwitchApplication.ViewArticleType,
            value: lightSwitchApplication.ViewArticleType
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewArticleType,
            data: lightSwitchApplication.ViewArticleType,
            value: lightSwitchApplication.ArticleType
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewArticleType,
            data: lightSwitchApplication.ArticleType,
            value: lightSwitchApplication.ArticleType
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewArticleType,
            data: lightSwitchApplication.ArticleType,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewArticleType,
            data: lightSwitchApplication.ArticleType,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewArticleType,
            data: lightSwitchApplication.ArticleType,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewArticleType,
            data: lightSwitchApplication.ArticleType,
            value: lightSwitchApplication.ArticleType
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewArticleType,
            data: lightSwitchApplication.ArticleType,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewArticleType,
            data: lightSwitchApplication.ArticleType,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewArticleType
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewArticleType, {
        /// <field>
        /// Called when a new ViewArticleType screen is created.
        /// <br/>created(msls.application.ViewArticleType screen)
        /// </field>
        created: [lightSwitchApplication.ViewArticleType],
        /// <field>
        /// Called before changes on an active ViewArticleType screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewArticleType screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewArticleType],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewArticleType().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewArticleType().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewArticleType().findContentItem("left"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.ViewArticleType().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewArticleType().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewArticleType().findContentItem("Created"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewArticleType().findContentItem("right"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewArticleType().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewArticleType().findContentItem("Modified"); }]
    });

    lightSwitchApplication.AddEditResult.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditResult
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditResult,
            data: lightSwitchApplication.AddEditResult,
            value: lightSwitchApplication.AddEditResult
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditResult,
            data: lightSwitchApplication.AddEditResult,
            value: lightSwitchApplication.Result
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditResult,
            data: lightSwitchApplication.Result,
            value: lightSwitchApplication.Result
        },
        Article: {
            _$class: msls.ContentItem,
            _$name: "Article",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditResult,
            data: lightSwitchApplication.Result,
            value: lightSwitchApplication.Article
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Article",
            screen: lightSwitchApplication.AddEditResult,
            data: lightSwitchApplication.Article,
            value: lightSwitchApplication.Article
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditResult,
            data: lightSwitchApplication.Result,
            value: lightSwitchApplication.Result
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditResult
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditResult, {
        /// <field>
        /// Called when a new AddEditResult screen is created.
        /// <br/>created(msls.application.AddEditResult screen)
        /// </field>
        created: [lightSwitchApplication.AddEditResult],
        /// <field>
        /// Called before changes on an active AddEditResult screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditResult screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditResult],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditResult().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditResult().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditResult().findContentItem("left"); }],
        /// <field>
        /// Called after the Article content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Article_postRender: [$element, function () { return new lightSwitchApplication.AddEditResult().findContentItem("Article"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditResult().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditResult().findContentItem("right"); }]
    });

}(msls.application));