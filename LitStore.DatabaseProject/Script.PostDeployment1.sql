/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/

SET IDENTITY_INSERT ArticleTypes ON;

MERGE INTO ArticleTypes AS Target
USING (VALUES
  (1, 'Trial'), 
  (2, 'Review'), 
  (3, 'Meta-analysis')
) 
AS Source(Id, [Description]) 
ON Target.Id = Source.Id 
-- update matched rows 
WHEN MATCHED THEN
UPDATE SET [Description] = Source.[Description]
-- insert new rows 
WHEN NOT MATCHED BY TARGET THEN
INSERT (Id, [Description])
VALUES (Id, [Description])
-- delete rows that are in the target but not the source 
WHEN NOT MATCHED BY SOURCE THEN
DELETE;
 
SET IDENTITY_INSERT ArticleTypes OFF;
 
GO
