builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("The sheet settings make it display no row/column headers");
oWorksheet.SetDisplayHeadings(false);
builder.SaveFile("xlsx", "SetDisplayHeadings.xlsx");
builder.CloseFile();
