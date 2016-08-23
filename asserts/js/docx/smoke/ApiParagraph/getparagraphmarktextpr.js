builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oParagraphMarkTextPr;
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We set the font size, font color and spacing for the paragraph mark. ");
oParagraph.AddText("You can see it if you download the document, open it and enable the invisible symbols display.");
var oParagraphMarkTextPr = oParagraph.GetParagraphMarkTextPr();
oParagraphMarkTextPr.SetFontSize(52);
oParagraphMarkTextPr.SetColor(255, 255, 0, false);
oParagraphMarkTextPr.SetSpacing(5);
builder.SaveFile("docx", "GetParagraphMarkTextPr.docx");
builder.CloseFile();
