/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewArticleType.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.ArticleType.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.ArticleType." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

