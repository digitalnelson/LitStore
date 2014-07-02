/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.Article, {
        /// <field>
        /// Called when a new article is created.
        /// <br/>created(msls.application.Article entity)
        /// </field>
        created: [lightSwitchApplication.Article]
    });

    msls._addEntryPoints(lightSwitchApplication.ArticleType, {
        /// <field>
        /// Called when a new articleType is created.
        /// <br/>created(msls.application.ArticleType entity)
        /// </field>
        created: [lightSwitchApplication.ArticleType]
    });

    msls._addEntryPoints(lightSwitchApplication.Author, {
        /// <field>
        /// Called when a new author is created.
        /// <br/>created(msls.application.Author entity)
        /// </field>
        created: [lightSwitchApplication.Author]
    });

    msls._addEntryPoints(lightSwitchApplication.Result, {
        /// <field>
        /// Called when a new result is created.
        /// <br/>created(msls.application.Result entity)
        /// </field>
        created: [lightSwitchApplication.Result]
    });

    msls._addEntryPoints(lightSwitchApplication.StudyDesign, {
        /// <field>
        /// Called when a new studyDesign is created.
        /// <br/>created(msls.application.StudyDesign entity)
        /// </field>
        created: [lightSwitchApplication.StudyDesign]
    });

    msls._addEntryPoints(lightSwitchApplication.StudyTarget, {
        /// <field>
        /// Called when a new studyTarget is created.
        /// <br/>created(msls.application.StudyTarget entity)
        /// </field>
        created: [lightSwitchApplication.StudyTarget]
    });

    msls._addEntryPoints(lightSwitchApplication.TargetType, {
        /// <field>
        /// Called when a new targetType is created.
        /// <br/>created(msls.application.TargetType entity)
        /// </field>
        created: [lightSwitchApplication.TargetType]
    });

}(msls.application));
