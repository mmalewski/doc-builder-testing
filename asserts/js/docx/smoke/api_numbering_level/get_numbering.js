builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oNumbering, oNumLvl, oNumLvl1, oNumLvl2;
oNumbering = oDocument.CreateNumbering("numbered");
oNumLvl = oNumbering.GetLevel(0);
oNumLvl1 = oNumbering.GetLevel(1);
oNumLvl1.SetRestart(false);
oParagraph = oDocument.GetElement(0);
oParagraph.SetNumbering(oNumLvl);
oParagraph.AddText("This is the first element of a parent numbered list which starts with '1'");
oParagraph = Api.CreateParagraph();
oParagraph.SetNumbering(oNumLvl1);
oParagraph.AddText("This is the first element of a child numbered list which starts with 'a'");
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.SetNumbering(oNumLvl1);
oParagraph.AddText("This is the second element of a child numbered list which starts with 'b'");
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph without a numbering. ");
oParagraph.AddText("It can be inserted between the numbered elements.");
oDocument.Push(oParagraph);
oNumbering = oNumLvl.GetNumbering();
oNumLvl2 = oNumbering.GetLevel(oNumLvl.GetLevelIndex());
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is the second element of a parent numbered list which starts with '2'");
oParagraph.SetNumbering(oNumLvl2);
oParagraph.SetContextualSpacing(true);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetNumbering.docx");
builder.CloseFile();
