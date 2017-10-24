builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oParaPr;
var oMyStyle = oDocument.CreateStyle("My document style");
oParaPr = oMyStyle.GetParaPr();
oParaPr.SetKeepNext(true);
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is an example of how the paragraph tries to keep together with the next paragraph. ");
oParagraph.AddText("Scroll down to the second page to see it. ");
for (var x = 0; x < 5; ++x)
{
    oParagraph = Api.CreateParagraph();
    for (var i = 0; i < 10; ++i)
    {
        oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
    }
    oParagraph.SetStyle(oMyStyle);
    oDocument.Push(oParagraph);
}
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The paragraph lines stay on the same page as the previous paragraph. ");
for (var i = 0; i < 10; ++i)
{
    oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
}
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetKeepNext.docx");
builder.CloseFile();
