import fs from "fs";
import path from "path";

function HSLtoHex(hue: number, sat: number, light: number): string {
   let h = hue >= 0 && hue <= 360 ? hue/360.0 : (((hue % 360) + 360) % 360)/360.0
	let s = sat/100.0
	let l = light/100.0

	let var_2 = l < 0.5 ? l * (1.0 + s) : (l + s) - (s * l)
	let var_1 = 2 * l - var_2

	let r: any = Hue2RGB(var_1, var_2, h + (1.0/3))
	let g: any = Hue2RGB(var_1, var_2, h)
   let b: any = Hue2RGB(var_1, var_2, h - (1.0/3))
   r = Math.floor((r < 0 ? 0 : r) * 255).toString(16)
   g = Math.floor((g < 0 ? 0 : g) * 255).toString(16)
   b = Math.floor((b < 0 ? 0 : b) * 255).toString(16)

	return `#${r}${g}${b}`

}

function Hue2RGB(v1: number, v2: number, vH: number) {
	let H = vH
	if (H < 0) H += 1
	if (H > 1) H -= 1
	if ((6 * H) < 1) return v1 + (v2 - v1) * 6 * H
	if ((2 * H) < 1) return v2
	if ((3 * H) < 2) return v1 + (v2 - v1) * ((2.0/3) - H) * 6
	return v1
}

function Shade(color: [number, number, number], offset: number, brightnessFactor: number) {
   let [h, s, l] = color
   l = (l - offset) * brightnessFactor
   l = l < 1 ? 1 : l > 100 ? 100 : l
   return HSLtoHex(h, s, l)
}

const color: [number, number, number] = [5, 3, 82]
const hueOffset = 0
const contrastFactor = 1
const brightnessFactor = 1

const normal = Shade(color, 0, brightnessFactor - 0.1)
const dark0 = Shade(color, 60 * contrastFactor, 1)
const dark1 = Shade(color, 69 * contrastFactor, 1)
const dark2 = Shade(color, 73 * contrastFactor, 1)
const dark3 = Shade(color, 75 * contrastFactor, 1)
const bright0 = Shade(color, 46, brightnessFactor)
const bright1 = Shade(color, 36, brightnessFactor)
const bright2 = Shade(color, 22, brightnessFactor)

const hl1 = HSLtoHex(hueOffset, 90 * brightnessFactor, (color[2] - 20) * brightnessFactor)
const hl2 = HSLtoHex(hueOffset + 35, 90 * brightnessFactor, (color[2] - 20) * brightnessFactor)
const hl3 = HSLtoHex(hueOffset + 200, 90 * brightnessFactor, (color[2] - 20) * brightnessFactor)
const eob = HSLtoHex(hueOffset, 40 * brightnessFactor, (color[2] - 50) * brightnessFactor)
const nt = HSLtoHex(hueOffset + 10, 45 * brightnessFactor, (color[2] - 40) * brightnessFactor)

const em1 = HSLtoHex(hueOffset + 35, 60 * brightnessFactor, (color[2] - 20) * brightnessFactor)
const em2 = HSLtoHex(hueOffset + 115, 20 * brightnessFactor, (color[2] - 20) * brightnessFactor)
const em3 = HSLtoHex(hueOffset, 60 * brightnessFactor, (color[2] - 20) * brightnessFactor)
const em4 = HSLtoHex(hueOffset + 200, 30 * brightnessFactor, (color[2] - 20) * brightnessFactor)

const DiffAdd = '#88aa77'
const DiffDelete = '#aa7766'
const DiffChange = '#7788aa'
const DiffText = '#7788aa'

const a = (color: string, alpha: string) => {
   return color.concat(alpha);
};

const monotoneThemePath = path.join(
   process.cwd(),
   "/themes/monotone-color-theme.json"
);

const functorTheme = {
   name: "monotone",
   type: "dark",
   semanticHighlighting: true,
   colors: {
      "activityBar.activeBackground": a(dark0, "00"),
      "activityBar.activeBorder": normal,
      "activityBar.activeFocusBorder": bright0,
      "activityBar.background": dark3,
      "activityBar.border": a(dark0, "BB"),
      "activityBar.dropBackground": a(normal, "22"),
      "activityBar.foreground": normal,
      "activityBar.inactiveForeground": bright0,
      "activityBarBadge.background": normal,
      "activityBarBadge.foreground": dark3,
      "badge.background": dark3,
      "badge.foreground": normal,
      "breadcrumb.activeSelectionForeground": bright1,
      "breadcrumb.background": dark2,
      "breadcrumb.focusForeground": normal,
      "breadcrumb.foreground": bright0,
      "breadcrumbPicker.background": dark2,
      "button.background": dark1,
      "button.foreground": normal,
      "button.hoverBackground": dark0,
      "checkbox.background": dark3,
      "checkbox.border": bright0,
      "checkbox.foreground": normal,
      // //"contrastActiveBorder": fg,
      // //"contrastBorder": fgc.t7,
      "debugExceptionWidget.background": dark3,
      "debugExceptionWidget.border": bright0,
      "debugIcon.breakpointCurrentStackframeForeground": normal,
      "debugIcon.breakpointDisabledForeground": bright0,
      "debugIcon.breakpointForeground": hl1,
      "debugIcon.breakpointStackframeForeground": normal,
      "debugIcon.breakpointUnverifiedForeground": normal,
      "debugIcon.continueForeground": normal,
      "debugIcon.disconnectForeground": normal,
      "debugIcon.pauseForeground": normal,
      "debugIcon.restartForeground": normal,
      "debugIcon.startForeground": normal,
      "debugIcon.stepBackForeground": normal,
      "debugIcon.stepIntoForeground": normal,
      "debugIcon.stepOutForeground": normal,
      "debugIcon.stepOverForeground": normal,
      "debugIcon.stopForeground": normal,
      "debugToolBar.background": dark3,
      "debugToolBar.border": a(dark0, "BB"),
      "debugView.valueChangedHighlight": DiffChange,
      "debugTokenExpression.string": em2,
      "debugTokenExpression.number": em1,
      "debugTokenExpression.boolean": em1,
      "debugTokenExpression.value": normal,
      "debugTokenExpression.name": normal,
      "debugTokenExpression.error": hl1,
      descriptionForeground: normal,
      "diffEditor.border": a(dark0, "BB"),
      // "diffEditor.insertedTextBackground": a(forest, "CC"),
      // "diffEditor.insertedTextBorder": a(DiffText, "CC"),
      // "diffEditor.removedTextBackground": a(rock, "CC"),
      // "diffEditor.removedTextBorder": a(hl1, "CC"),
      "dropdown.background": dark3,
      "dropdown.border": a(dark0, "BB"),
      "dropdown.foreground": normal,
      "dropdown.listBackground": dark3,
      "editor.background": dark3,
      "editor.findMatchBackground": a(dark0, "00"),
      "editor.findMatchBorder": hl2,
      "editor.findMatchHighlightBackground": a(dark0, "00"),
      "editor.findMatchHighlightBorder": a(normal, "BB"),
      "editor.findRangeHighlightBackground": a(dark0, "00"),
      "editor.findRangeHighlightBorder": a(normal, "BB"),
      "editor.focusedStackFrameHighlightBackground": a(normal, "77"),
      "editor.foldBackground": a(normal, "77"),
      "editor.foreground": normal,
      "editor.hoverHighlightBackground": dark0,
      "editor.inactiveSelectionBackground": a(dark1, "50"),
      "editor.lineHighlightBackground": a(dark1, "70"),
      "editor.lineHighlightBorder": dark1,
      "editor.rangeHighlightBackground": dark3,
      "editor.rangeHighlightBorder": bright0,
      "editor.selectionBackground": dark1,
      "editor.selectionForeground": normal,
      "editor.selectionHighlightBackground": a(normal, "33"),
      "editor.selectionHighlightBorder": dark0,
      "editor.snippetFinalTabstopHighlightBackground": a(normal, "33"),
      "editor.snippetFinalTabstopHighlightBorder": dark0,
      "editor.snippetTabstopHighlightBackground": a(normal, "33"),
      "editor.snippetTabstopHighlightBorder": dark0,
      "editor.stackFrameHighlightBackground": a(normal, "33"),
      "editor.symbolHighlightBackground": a(normal, "33"),
      "editor.symbolHighlightBorder": dark0,
      "editor.wordHighlightBackground": a(normal, "33"),
      "editor.wordHighlightBorder": dark0,
      "editor.wordHighlightStrongBackground": dark0,
      "editor.wordHighlightStrongBorder": a(dark0, "BB"),
      "editorBracketMatch.background": a(dark3, "00"),
      "editorBracketMatch.border": hl2,
      "editorCodeLens.foreground": normal,
      "editorCursor.background": dark3,
      "editorCursor.foreground": hl1,
      "editorError.border": a(dark0, "BB"),
      "editorError.foreground": hl1,
      "editorGroup.border": a(dark0, "BB"),
      "editorGroup.dropBackground": a(normal, "22"),
      "editorGroup.emptyBackground": dark3,
      "editorGroup.focusedEmptyBorder": a(dark0, "BB"),
      "editorGroupHeader.noTabsBackground": dark3,
      "editorGroupHeader.tabsBackground": dark3,
      "editorGroupHeader.tabsBorder": dark0,
      "editorGutter.addedBackground": DiffAdd,
      "editorGutter.background": dark3,
      "editorGutter.commentRangeForeground": a(normal, "77"),
      "editorGutter.deletedBackground": hl1,
      "editorGutter.modifiedBackground": DiffChange,
      "editorHint.border": dark0,
      "editorHint.foreground": normal,
      "editorHoverWidget.background": dark2,
      "editorHoverWidget.border": dark0,
      "editorHoverWidget.foreground": normal,
      "editorHoverWidget.statusBarBackground": a(dark0, "77"),
      "editorIndentGuide.activeBackground": dark0,
      "editorIndentGuide.background": dark1,
      "editorInfo.border": dark0,
      "editorInfo.foreground": normal,
      "editorLightBulb.foreground": normal,
      "editorLightBulbAutoFix.foreground": dark0,
      "editorLineNumber.activeForeground": normal,
      "editorLineNumber.foreground": dark0,
      "editorLink.activeForeground": normal,
      "editorMarkerNavigation.background": dark0,
      "editorMarkerNavigationError.background": hl1,
      "editorMarkerNavigationInfo.background": DiffText,
      "editorMarkerNavigationWarning.background": hl2,
      "editorOverviewRuler.addedForeground": dark0,
      "editorOverviewRuler.border": dark0,
      "editorOverviewRuler.bracketMatchForeground": dark0,
      "editorOverviewRuler.commonContentForeground": dark0,
      "editorOverviewRuler.currentContentForeground": dark0,
      "editorOverviewRuler.deletedForeground": dark0,
      "editorOverviewRuler.errorForeground": hl1,
      "editorOverviewRuler.findMatchForeground": dark0,
      "editorOverviewRuler.incomingContentForeground": dark0,
      "editorOverviewRuler.infoForeground": dark0,
      "editorOverviewRuler.modifiedForeground": dark0,
      "editorOverviewRuler.rangeHighlightForeground": dark0,
      "editorOverviewRuler.selectionHighlightForeground": dark0,
      "editorOverviewRuler.warningForeground": dark0,
      "editorOverviewRuler.wordHighlightForeground": dark0,
      "editorOverviewRuler.wordHighlightStrongForeground": dark0,
      "editorPane.background": dark3,
      "editorRuler.foreground": normal,
      "editorSuggestWidget.background": dark3,
      "editorSuggestWidget.border": a(dark0, "BB"),
      "editorSuggestWidget.foreground": normal,
      "editorSuggestWidget.highlightForeground": normal,
      "editorSuggestWidget.selectedBackground": dark0,
      "editorUnnecessaryCode.border": a(dark0, "BB"),
      "editorUnnecessaryCode.opacity": a(normal, "BB"),
      "editorWarning.border": a(dark0, "BB"),
      "editorWarning.foreground": hl2,
      "editorWhitespace.foreground": a(normal, "50"),
      "editorWidget.background": dark3,
      "editorWidget.border": a(dark0, "BB"),
      "editorWidget.foreground": normal,
      "editorWidget.resizeBorder": a(normal, "77"),
      errorForeground: normal,
      "extensionBadge.remoteBackground": dark3,
      "extensionBadge.remoteForeground": normal,
      "extensionButton.prominentBackground": dark3,
      "extensionButton.prominentForeground": normal,
      "extensionButton.prominentHoverBackground": dark3,
      focusBorder: a(dark0, "BB"),
      foreground: normal,
      "gitDecoration.addedResourceForeground": DiffAdd,
      "gitDecoration.conflictingResourceForeground": normal,
      "gitDecoration.deletedResourceForeground": DiffDelete,
      "gitDecoration.ignoredResourceForeground": bright0,
      "gitDecoration.modifiedResourceForeground": DiffChange,
      "gitDecoration.submoduleResourceForeground": normal,
      "gitDecoration.untrackedResourceForeground": normal,
      "icon.foreground": normal,
      "imagePreview.border": a(dark0, "BB"),
      "input.background": dark3,
      "input.border": a(dark0, "BB"),
      "input.foreground": normal,
      "input.placeholderForeground": a(dark0, "BB"),
      "inputOption.activeBackground": dark0,
      "inputOption.activeBorder": a(dark0, "BB"),
      "inputValidation.errorBackground": hl1,
      "inputValidation.errorBorder": dark2,
      "inputValidation.errorForeground": dark3,
      "inputValidation.infoBackground": DiffText,
      "inputValidation.infoBorder": dark2,
      "inputValidation.infoForeground": dark3,
      "inputValidation.warningBackground": hl2,
      "inputValidation.warningBorder": dark2,
      "inputValidation.warningForeground": dark3,
      "list.activeSelectionBackground": dark0,
      "list.activeSelectionForeground": normal,
      "list.dropBackground": a(normal, "22"),
      "list.errorForeground": hl1,
      "list.filterMatchBackground": dark3,
      "list.filterMatchBorder": a(dark0, "BB"),
      "list.focusBackground": dark1,
      "list.focusForeground": normal,
      "list.highlightForeground": normal,
      "list.hoverBackground": dark0,
      "list.hoverForeground": normal,
      "list.inactiveFocusBackground": dark0,
      "list.inactiveSelectionBackground": dark1,
      "list.inactiveSelectionForeground": normal,
      "list.invalidItemForeground": normal,
      "list.warningForeground": hl2,
      "listFilterWidget.background": dark3,
      "listFilterWidget.noMatchesOutline": hl2,
      "listFilterWidget.outline": normal,
      "menu.background": dark3,
      "menu.border": a(dark0, "BB"),
      "menu.foreground": normal,
      "menu.selectionBackground": dark0,
      "menu.selectionBorder": dark0,
      "menu.selectionForeground": dark3,
      "menu.separatorBackground": dark0,
      "menubar.selectionBackground": dark0,
      "menubar.selectionBorder": a(dark0, "BB"),
      "menubar.selectionForeground": normal,
      "merge.border": a(dark0, "BB"),
      "merge.commonContentBackground": dark3,
      "merge.commonHeaderBackground": dark3,
      "merge.currentContentBackground": dark3,
      "merge.currentHeaderBackground": dark3,
      "merge.incomingContentBackground": dark3,
      "merge.incomingHeaderBackground": dark3,
      "minimap.errorHighlight": hl1,
      "minimap.findMatchHighlight": hl2,
      "minimap.selectionHighlight": bright0,
      "minimap.warningHighlight": hl2,
      "minimapGutter.addedBackground": DiffAdd,
      "minimapGutter.deletedBackground": DiffDelete,
      "minimapGutter.modifiedBackground": DiffChange,
      "notificationCenter.border": a(dark0, "BB"),
      "notificationCenterHeader.background": dark3,
      "notificationCenterHeader.foreground": normal,
      "notificationLink.foreground": normal,
      "notifications.background": dark3,
      "notifications.border": a(dark0, "BB"),
      "notifications.foreground": normal,
      "notificationsErrorIcon.foreground": hl1,
      "notificationsInfoIcon.foreground": normal,
      "notificationsWarningIcon.foreground": hl2,
      "notificationToast.border": a(dark0, "BB"),
      "panel.background": dark3,
      "panel.border": a(dark0, "BB"),
      "panel.dropBackground": a(normal, "22"),
      "panelInput.border": a(dark0, "BB"),
      "panelTitle.activeBorder": a(dark0, "BB"),
      "panelTitle.activeForeground": normal,
      "panelTitle.inactiveForeground": dark0,
      "peekView.border": a(dark0, "BB"),
      "peekViewEditor.background": dark3,
      "peekViewEditor.matchHighlightBackground": dark3,
      "peekViewEditor.matchHighlightBorder": a(dark0, "BB"),
      "peekViewEditorGutter.background": dark3,
      "peekViewResult.background": dark3,
      "peekViewResult.fileForeground": normal,
      "peekViewResult.lineForeground": normal,
      "peekViewResult.matchHighlightBackground": dark3,
      "peekViewResult.selectionBackground": dark1,
      "peekViewResult.selectionForeground": normal,
      "peekViewTitle.background": dark3,
      "peekViewTitleDescription.foreground": normal,
      "peekViewTitleLabel.foreground": normal,
      "pickerGroup.border": a(dark0, "BB"),
      "pickerGroup.foreground": normal,
      "problemsErrorIcon.foreground": hl1,
      "problemsInfoIcon.foreground": normal,
      "problemsWarningIcon.foreground": hl2,
      "progressBar.background": dark3,
      "quickInput.background": dark3,
      "quickInput.foreground": normal,
      "scrollbar.shadow": a(normal, "33"),
      "scrollbarSlider.activeBackground": a(normal, "33"),
      "scrollbarSlider.background": a(normal, "33"),
      "scrollbarSlider.hoverBackground": a(normal, "33"),
      "searchEditor.findMatchBackground": a(dark0, "00"),
      "searchEditor.findMatchBorder": hl2,
      "searchEditor.textInputBorder": a(dark0, "BB"),
      "selection.background": bright2,
      "settings.checkboxBackground": dark3,
      "settings.checkboxBorder": a(dark0, "BB"),
      "settings.checkboxForeground": normal,
      "settings.dropdownBackground": dark3,
      "settings.dropdownBorder": a(dark0, "BB"),
      "settings.dropdownForeground": normal,
      "settings.dropdownListBorder": a(dark0, "BB"),
      "settings.headerForeground": normal,
      "settings.modifiedItemIndicator": a(dark0, "BB"),
      "settings.numberInputBackground": dark3,
      "settings.numberInputBorder": a(dark0, "BB"),
      "settings.numberInputForeground": normal,
      "settings.textInputBackground": dark3,
      "settings.textInputBorder": a(dark0, "BB"),
      "settings.textInputForeground": normal,
      "sideBar.background": dark3,
      "sideBar.border": a(dark0, "BB"),
      "sideBar.dropBackground": a(normal, "22"),
      "sideBar.foreground": normal,
      "sideBarSectionHeader.background": dark2,
      "sideBarSectionHeader.border": a(dark0, "BB"),
      "sideBarSectionHeader.foreground": normal,
      "sideBarTitle.foreground": normal,
      "statusBar.background": dark3,
      "statusBar.border": a(dark0, "BB"),
      "statusBar.debuggingBackground": bright2,
      "statusBar.debuggingBorder": a(dark0, "BB"),
      "statusBar.debuggingForeground": dark3,
      "statusBar.foreground": normal,
      "statusBar.noFolderBackground": dark3,
      "statusBar.noFolderBorder": a(dark0, "BB"),
      "statusBar.noFolderForeground": normal,
      "statusBarItem.activeBackground": dark3,
      "statusBarItem.hoverBackground": dark0,
      "statusBarItem.prominentBackground": dark0,
      "statusBarItem.prominentForeground": normal,
      "statusBarItem.prominentHoverBackground": a(dark0, "BB"),
      "statusBarItem.remoteBackground": dark3,
      "statusBarItem.remoteForeground": normal,
      "symbolIcon.arrayForeground": normal,
      "symbolIcon.booleanForeground": normal,
      "symbolIcon.classForeground": normal,
      "symbolIcon.colorForeground": normal,
      "symbolIcon.constantForeground": normal,
      "symbolIcon.constructorForeground": normal,
      "symbolIcon.enumeratorForeground": normal,
      "symbolIcon.enumeratorMemberForeground": normal,
      "symbolIcon.eventForeground": normal,
      "symbolIcon.fieldForeground": normal,
      "symbolIcon.fileForeground": normal,
      "symbolIcon.folderForeground": normal,
      "symbolIcon.functionForeground": normal,
      "symbolIcon.interfaceForeground": normal,
      "symbolIcon.keyForeground": normal,
      "symbolIcon.keywordForeground": normal,
      "symbolIcon.methodForeground": normal,
      "symbolIcon.moduleForeground": normal,
      "symbolIcon.namespaceForeground": normal,
      "symbolIcon.nullForeground": normal,
      "symbolIcon.numberForeground": normal,
      "symbolIcon.objectForeground": normal,
      "symbolIcon.operatorForeground": normal,
      "symbolIcon.packageForeground": normal,
      "symbolIcon.propertyForeground": normal,
      "symbolIcon.referenceForeground": normal,
      "symbolIcon.snippetForeground": normal,
      "symbolIcon.stringForeground": normal,
      "symbolIcon.structForeground": normal,
      "symbolIcon.textForeground": normal,
      "symbolIcon.typeParameterForeground": normal,
      "symbolIcon.unitForeground": normal,
      "symbolIcon.variableForeground": normal,
      "tab.activeBackground": a(dark0, "80"),
      "tab.activeBorder": a(dark0, "BB"),
      "tab.activeBorderTop": a(dark0, "00"),
      "tab.activeForeground": bright2,
      "tab.activeModifiedBorder": a(hl2, "BB"),
      "tab.border": a(dark3, "00"),
      "tab.hoverBackground": dark0,
      "tab.hoverBorder": a(dark3, "00"),
      "tab.inactiveBackground": dark3,
      "tab.inactiveForeground": bright1,
      "tab.inactiveModifiedBorder": hl2,
      "tab.unfocusedActiveBackground": dark3,
      "tab.unfocusedActiveBorder": a(dark3, "00"),
      "tab.unfocusedActiveBorderTop": dark3,
      "tab.unfocusedActiveForeground": normal,
      "tab.unfocusedActiveModifiedBorder": dark3,
      "tab.unfocusedHoverBackground": dark0,
      "tab.unfocusedHoverBorder": dark3,
      "tab.unfocusedInactiveForeground": dark0,
      "tab.unfocusedInactiveModifiedBorder": a(dark3, "00"),
      "terminal.ansiBlack": dark1,
      "terminal.ansiBrightBlack": "#5F5959",
      "terminal.ansiRed": "#A54434",
      "terminal.ansiBrightRed": "#FF2D3C",
      "terminal.ansiGreen": "#7FAC71",
      "terminal.ansiBrightGreen": "#D3CFCF",
      "terminal.ansiYellow": "#D3CFCF",
      "terminal.ansiBrightYellow": "#FFAA23",
      "terminal.ansiBlue": "#9D9695",
      "terminal.ansiBrightBlue": "#7488AD",
      "terminal.ansiMagenta": "#9D9695",
      "terminal.ansiBrightMagenta": "#D3CFCF",
      "terminal.ansiCyan": "#9D9695",
      "terminal.ansiBrightCyan": "#D3CFCF",
      "terminal.ansiWhite": "#9D9695",
      "terminal.ansiBrightWhite": "#D3CFCF",
      "terminal.background": dark3,
      "terminal.border": a(dark0, "BB"),
      "terminal.foreground": normal,
      "terminal.selectionBackground": em1,
      "terminalCursor.background": em1,
      "terminalCursor.foreground": normal,
      "textBlockQuote.background": dark3,
      "textBlockQuote.border": a(dark0, "BB"),
      "textCodeBlock.background": dark3,
      "textLink.activeForeground": normal,
      "textLink.foreground": bright1,
      "textPreformat.foreground": normal,
      "textSeparator.foreground": normal,
      "titleBar.activeBackground": dark3,
      "titleBar.activeForeground": normal,
      "titleBar.border": dark0,
      "titleBar.inactiveBackground": dark3,
      "titleBar.inactiveForeground": normal,
      "tree.indentGuidesStroke": bright0,
      "walkThrough.embeddedEditorBackground": dark3,
      "welcomePage.background": dark3,
      "welcomePage.buttonBackground": dark0,
      "welcomePage.buttonHoverBackground": dark0,
      "widget.shadow": a(normal, "33"),
      "window.activeBorder": dark0,
      "window.inactiveBorder": bright0,
   },
   semanticTokenColors: {
      "parameter.declaration": normal,
      parameter: normal,
      function: normal,
      method: normal
   },
   tokenColors: [
      {
         scope: ["comment"],
         settings: {
            foreground: bright1,
            fontStyle: "italic",
         },
      },
      {
         scope: ["storage.type", "variable.parameter", "meta.parameters"],
         settings: {
            foreground: normal,
            fontStyle: "italic"
         }
      },
      {
         scope: ["punctuation.definition.comment"],
         settings: {
            foreground: bright1,
         },
      },
      {
         scope: ["keyword.operator"],
         settings: {
            foreground: em3,
            fontStyle: "bold"
         },
      },
      {
         scope: [
            "meta.definition.variable"
         ],
         settings: {
            foreground: bright0,
            fontStyle: "bold",
         },
      },
      {
         scope: [
            "meta.decorator",
            "keyword.control.import",
            "keyword.control.export",
            "keyword.control.from",
            "keyword.control.loop",
            "keyword.other.haskell",
            "keyword.control.as",
            "keyword.control.conditional",
            "storage.type.function.arrow"
         ],
         settings: {
            foreground: normal,
            fontStyle: "bold"
         },
      },
      {
         scope: ["punctuation", "meta.brace"],
         settings: {
            foreground: em3,
            fontStyle: "normal",
         },
      },
      {
         scope: [
            "variable",
            "meta.definition.function",
         ],
         settings: {
            foreground: normal,
            fontStyle: "normal"
         },
      },
      {
         scope: [
            "meta.type",
            "meta.return.type",
            "entity.name.type"
         ],
         settings: {
            foreground: em4,
            fontStyle: "bold",
         },
      },
      {
         scope: [
            "storage.modifier",
            "keyword.control.flow",
            "keyword.other.big-arrow.haskell",
            "keyword.other.arrow.haskell",
            "support.type.primitive",
            "support.type.builtin",
            "storage.type.type",
            "storage.type.interface"
         ],
         settings: {
            foreground: normal,
            fontStyle: "bold",
         },
      },
      {
         scope: ["constant.character", "string", "punctuation.definition.string"],
         settings: {
            foreground: em2,
         },
      },
      {
         scope: [
            "constant.character.escape",
         ],
         settings: {
            foreground: normal,
            fontStyle: "bold"
         },
      },
      {
         scope: [
            "storage",
            "keyword.control.type",
            "keyword.operator.expression.is",
            "punctuation.definition.template-expression",
            "punctuation.terminator"
         ],
         settings: {
            foreground: normal,
            fontStyle: "bold"
         },
      },
      {
         scope: [
            "constant.language.boolean",
            "constant.language.undefined",
            "constant.language.null",
            "constant.numeric",
         ],
         settings: {
            foreground: em1,
         },
      },
      {
         scope: ["strong"],
         settings: {
            fontStyle: "bold",
         },
      },
      {
         scope: ["invalid"],
         settings: {
            foreground: "#bbbbbb88",
            fontStyle: "italic underline",
         },
      },
   ],
};

fs.writeFileSync(monotoneThemePath, JSON.stringify(functorTheme));
