/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditArticle(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditArticle screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Article" type="msls.application.Article">
        /// Gets or sets the article for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditArticle.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditArticle", parameters);
    }

    function BrowseArticles(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseArticles screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Articles" type="msls.VisualCollection" elementType="msls.application.Article">
        /// Gets the articles for this screen.
        /// </field>
        /// <field name="Results" type="msls.VisualCollection" elementType="msls.application.Result">
        /// Gets the results for this screen.
        /// </field>
        /// <field name="Authors" type="msls.VisualCollection" elementType="msls.application.Author">
        /// Gets the authors for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseArticles.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseArticles", parameters);
    }

    function ViewArticle(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewArticle screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Article" type="msls.application.Article">
        /// Gets or sets the article for this screen.
        /// </field>
        /// <field name="Results" type="msls.VisualCollection" elementType="msls.application.Result">
        /// Gets the results for this screen.
        /// </field>
        /// <field name="Authors" type="msls.VisualCollection" elementType="msls.application.Author">
        /// Gets the authors for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewArticle.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewArticle", parameters);
    }

    function AddEditArticleType(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditArticleType screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ArticleType" type="msls.application.ArticleType">
        /// Gets or sets the articleType for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditArticleType.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditArticleType", parameters);
    }

    function BrowseArticleTypes(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseArticleTypes screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ArticleTypes" type="msls.VisualCollection" elementType="msls.application.ArticleType">
        /// Gets the articleTypes for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseArticleTypes.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseArticleTypes", parameters);
    }

    function ViewArticleType(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewArticleType screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ArticleType" type="msls.application.ArticleType">
        /// Gets or sets the articleType for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewArticleType.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewArticleType", parameters);
    }

    function AddEditResult(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditResult screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Result" type="msls.application.Result">
        /// Gets or sets the result for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditResult.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditResult", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditArticle: $defineScreen(AddEditArticle, [
            { name: "Article", kind: "local", type: lightSwitchApplication.Article }
        ], [
        ]),

        BrowseArticles: $defineScreen(BrowseArticles, [
            {
                name: "Articles", kind: "collection", elementType: lightSwitchApplication.Article,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Articles.expand("ArticleType");
                }
            },
            {
                name: "Results", kind: "collection", elementType: lightSwitchApplication.Result,
                getNavigationProperty: function () {
                    if (this.owner.Articles.selectedItem) {
                        return this.owner.Articles.selectedItem.details.properties.Results;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            {
                name: "Authors", kind: "collection", elementType: lightSwitchApplication.Author,
                getNavigationProperty: function () {
                    if (this.owner.Articles.selectedItem) {
                        return this.owner.Articles.selectedItem.details.properties.Authors;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        ViewArticle: $defineScreen(ViewArticle, [
            { name: "Article", kind: "local", type: lightSwitchApplication.Article },
            {
                name: "Results", kind: "collection", elementType: lightSwitchApplication.Result,
                getNavigationProperty: function () {
                    if (this.owner.Article) {
                        return this.owner.Article.details.properties.Results;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            {
                name: "Authors", kind: "collection", elementType: lightSwitchApplication.Author,
                getNavigationProperty: function () {
                    if (this.owner.Article) {
                        return this.owner.Article.details.properties.Authors;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        AddEditArticleType: $defineScreen(AddEditArticleType, [
            { name: "ArticleType", kind: "local", type: lightSwitchApplication.ArticleType }
        ], [
        ]),

        BrowseArticleTypes: $defineScreen(BrowseArticleTypes, [
            {
                name: "ArticleTypes", kind: "collection", elementType: lightSwitchApplication.ArticleType,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.ArticleTypes;
                }
            }
        ], [
        ]),

        ViewArticleType: $defineScreen(ViewArticleType, [
            { name: "ArticleType", kind: "local", type: lightSwitchApplication.ArticleType }
        ], [
        ]),

        AddEditResult: $defineScreen(AddEditResult, [
            { name: "Result", kind: "local", type: lightSwitchApplication.Result }
        ], [
        ]),

        showAddEditArticle: $defineShowScreen(function showAddEditArticle(Article, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditArticle screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditArticle", parameters, options);
        }),

        showBrowseArticles: $defineShowScreen(function showBrowseArticles(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseArticles screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseArticles", parameters, options);
        }),

        showViewArticle: $defineShowScreen(function showViewArticle(Article, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewArticle screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewArticle", parameters, options);
        }),

        showAddEditArticleType: $defineShowScreen(function showAddEditArticleType(ArticleType, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditArticleType screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditArticleType", parameters, options);
        }),

        showBrowseArticleTypes: $defineShowScreen(function showBrowseArticleTypes(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseArticleTypes screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseArticleTypes", parameters, options);
        }),

        showViewArticleType: $defineShowScreen(function showViewArticleType(ArticleType, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewArticleType screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewArticleType", parameters, options);
        }),

        showAddEditResult: $defineShowScreen(function showAddEditResult(Result, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditResult screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditResult", parameters, options);
        })

    });

}(msls.application));
