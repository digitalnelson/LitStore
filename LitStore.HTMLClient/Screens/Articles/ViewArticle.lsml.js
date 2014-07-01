/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewArticle.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Article.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Article." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

