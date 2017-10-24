builder.CreateFile("docx");
var oDocument, oParagraph, oFinalSection, oDocContent;
oDocument = Api.GetDocument();
oDocument.CreateNewHistoryPoint();
oParagraph = Api.CreateParagraph();
oFinalSection = oDocument.GetFinalSection();
oDocContent = oFinalSection.GetHeader("default", true);
oDocContent.Push(oParagraph);
oParagraph.AddText("header");
builder.SaveFile("docx", "add_text_in_header.docx");
builder.CloseFile();
