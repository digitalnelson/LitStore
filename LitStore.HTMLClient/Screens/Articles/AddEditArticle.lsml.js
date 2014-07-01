/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditArticle.columns_postRender = function (element, contentItem) {
    // Write code here.
};
//myapp.AddEditArticle.LookupPMID_execute = function (screen) {
//    // Write code here.
//    var i;
//    i = 5;

//    $.get('/api/pubmed/' + screen.Article.PMID, function (data) {

//        if (data != null && data != "" && data != " ") {

//            screen.Article.Title = data.PubmedArticleSet.PubmedArticle.MedlineCitation.Article.ArticleTitle;
//        }
//    });

//};

myapp.AddEditArticle.LookupPMID_execute = function (screen) {
    //// Set the default date for the Order
    //screen.Article.Title = "Pretest";
    //// Using a Promise object we can call the CallGetUserName function
    //return msls.promiseOperation(CallGetPubmedData).then(
    //    function PromiseSuccess(PromiseResult) {

    //        screen.Article.Title = PromiseResult.PubmedArticleSet.PubmedArticle.MedlineCitation.Article.ArticleTitle;

    //    }, 
    //    function PromiseFailure(error) {

    //        var p;
    //        p = 5;

    //    }
    //);

    return msls.promiseOperation(function (operation) {

        $.ajax({
            type: 'get',
            data: {},
            url: '/api/pubmed/' + screen.Article.PMID,
            success: function (data) {

                screen.Article.Title = data.Title;
                operation.complete();
            }
        });
    });

};
//// This function will be wrapped in a Promise object
//function CallGetPubmedData(operation) {
//    $.ajax({
//        type: 'get',
//        data: {},
//        url: '/api/pubmed/24978634',// + screen.Article.PMID,
//        success: operation.code(function AjaxSuccess(AjaxResult) {
//            operation.complete(AjaxResult);
//        })
//    });
//}
