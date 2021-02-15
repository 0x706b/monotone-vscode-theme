"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Monochrome Colors
const bg0 = "#181818";
const bg1 = "#222222";
const bg2 = "#303030";
const bg3 = "#3e3e3e";
const darkgray = "#4b4b4b";
const comment = "#595959";
const gray = "#686868";
const midgray = "#777777";
const lightgray = "#828282";
const slate = "#919191";
const lightslate = "#a0a0a0";
const fg__ = "#b0b0b0";
const fg_ = "#c1c1c1";
const fg0 = "#d1d1d1";
const fg1 = "#e2e2e2";
const fg2 = "#f1f1f1";
// Accent Colors
const sand = "#da9a89";
const sea = "#8bbdb3";
const sun = "#ffc888";
const sky = "#88b1c9";
const type = "#cdac98";
const caution = "#dbb58f";
const rock = "#d25151";
const ocean = "#2888a0";
const forest = "#2e9476";
const salmon = "#d87f77";
const grass = "#90b290";
const beam = "#ffc888";
const wildflower = "#eb9b79";
const a = (color, alpha) => {
    return color.concat(alpha);
};
const functorThemePath = path_1.default.join(process.cwd(), "/themes/functor-color-theme.json");
const functorTheme = {
    name: "Functor",
    type: "dark",
    semanticHighlighting: true,
    colors: {
        "activityBar.activeBackground": darkgray,
        "activityBar.activeBorder": fg_,
        "activityBar.activeFocusBorder": fg_,
        "activityBar.background": bg0,
        "activityBar.border": a(slate, "BB"),
        "activityBar.dropBackground": a(fg0, "22"),
        "activityBar.foreground": fg0,
        "activityBar.inactiveForeground": gray,
        "activityBarBadge.background": fg0,
        "activityBarBadge.foreground": bg0,
        "badge.background": bg0,
        "badge.foreground": fg0,
        "breadcrumb.activeSelectionForeground": fg1,
        "breadcrumb.background": bg1,
        "breadcrumb.focusForeground": fg0,
        "breadcrumb.foreground": fg__,
        "breadcrumbPicker.background": bg1,
        "button.background": bg1,
        "button.foreground": fg0,
        "button.hoverBackground": darkgray,
        "checkbox.background": bg0,
        "checkbox.border": fg_,
        "checkbox.foreground": fg0,
        // //"contrastActiveBorder": fg,
        // //"contrastBorder": fgc.t7,
        "debugExceptionWidget.background": bg0,
        "debugExceptionWidget.border": fg_,
        "debugIcon.breakpointCurrentStackframeForeground": fg0,
        "debugIcon.breakpointDisabledForeground": fg__,
        "debugIcon.breakpointForeground": fg0,
        "debugIcon.breakpointStackframeForeground": fg0,
        "debugIcon.breakpointUnverifiedForeground": fg0,
        "debugIcon.continueForeground": fg0,
        "debugIcon.disconnectForeground": fg0,
        "debugIcon.pauseForeground": fg0,
        "debugIcon.restartForeground": fg0,
        "debugIcon.startForeground": fg0,
        "debugIcon.stepBackForeground": fg0,
        "debugIcon.stepIntoForeground": fg0,
        "debugIcon.stepOutForeground": fg0,
        "debugIcon.stepOverForeground": fg0,
        "debugIcon.stopForeground": fg0,
        "debugToolBar.background": bg0,
        "debugToolBar.border": a(slate, "BB"),
        descriptionForeground: fg0,
        "diffEditor.border": a(slate, "BB"),
        // "diffEditor.insertedTextBackground": a(forest, "CC"),
        "diffEditor.insertedTextBorder": a(forest, "CC"),
        // "diffEditor.removedTextBackground": a(rock, "CC"),
        "diffEditor.removedTextBorder": a(rock, "CC"),
        "dropdown.background": bg0,
        "dropdown.border": a(slate, "BB"),
        "dropdown.foreground": fg0,
        "dropdown.listBackground": bg0,
        "editor.background": bg0,
        "editor.findMatchBackground": a(fg0, "77"),
        "editor.findMatchBorder": a(slate, "BB"),
        "editor.findMatchHighlightBackground": a(ocean, "77"),
        // "editor.findMatchHighlightBorder": a(slate, "BB"),
        "editor.findRangeHighlightBackground": a(ocean, "77"),
        // "editor.findRangeHighlightBorder": a(slate, "BB"),
        "editor.focusedStackFrameHighlightBackground": a(fg0, "77"),
        "editor.foldBackground": a(fg0, "77"),
        "editor.foreground": fg0,
        "editor.hoverHighlightBackground": bg3,
        "editor.inactiveSelectionBackground": a(bg2, "50"),
        "editor.lineHighlightBackground": a(bg2, "70"),
        "editor.lineHighlightBorder": bg2,
        "editor.rangeHighlightBackground": bg0,
        "editor.rangeHighlightBorder": fg_,
        "editor.selectionBackground": bg2,
        "editor.selectionForeground": fg0,
        "editor.selectionHighlightBackground": a(fg0, "33"),
        "editor.selectionHighlightBorder": darkgray,
        "editor.snippetFinalTabstopHighlightBackground": a(fg0, "33"),
        "editor.snippetFinalTabstopHighlightBorder": darkgray,
        "editor.snippetTabstopHighlightBackground": a(fg0, "33"),
        "editor.snippetTabstopHighlightBorder": darkgray,
        "editor.stackFrameHighlightBackground": a(fg0, "33"),
        "editor.symbolHighlightBackground": a(fg0, "33"),
        "editor.symbolHighlightBorder": darkgray,
        "editor.wordHighlightBackground": a(fg0, "33"),
        "editor.wordHighlightBorder": slate,
        "editor.wordHighlightStrongBackground": bg3,
        "editor.wordHighlightStrongBorder": a(slate, "BB"),
        "editorBracketMatch.background": bg0,
        "editorBracketMatch.border": slate,
        "editorCodeLens.foreground": fg0,
        "editorCursor.background": bg0,
        "editorCursor.foreground": sun,
        "editorError.border": a(slate, "BB"),
        "editorError.foreground": rock,
        "editorGroup.border": a(slate, "BB"),
        "editorGroup.dropBackground": a(fg0, "22"),
        "editorGroup.emptyBackground": bg0,
        "editorGroup.focusedEmptyBorder": a(slate, "BB"),
        "editorGroupHeader.noTabsBackground": bg0,
        "editorGroupHeader.tabsBackground": bg0,
        "editorGroupHeader.tabsBorder": slate,
        "editorGutter.addedBackground": forest,
        "editorGutter.background": bg0,
        "editorGutter.commentRangeForeground": a(fg0, "77"),
        "editorGutter.deletedBackground": rock,
        "editorGutter.modifiedBackground": ocean,
        "editorHint.border": slate,
        "editorHint.foreground": fg0,
        "editorHoverWidget.background": bg2,
        "editorHoverWidget.border": darkgray,
        "editorHoverWidget.foreground": fg0,
        "editorHoverWidget.statusBarBackground": a(darkgray, "77"),
        "editorIndentGuide.activeBackground": a(fg0, "77"),
        "editorIndentGuide.background": a(fg0, "50"),
        "editorInfo.border": slate,
        "editorInfo.foreground": fg0,
        "editorLightBulb.foreground": fg0,
        "editorLightBulbAutoFix.foreground": slate,
        "editorLineNumber.activeForeground": fg0,
        "editorLineNumber.foreground": bg3,
        "editorLink.activeForeground": fg0,
        "editorMarkerNavigation.background": darkgray,
        "editorMarkerNavigationError.background": rock,
        "editorMarkerNavigationInfo.background": ocean,
        "editorMarkerNavigationWarning.background": caution,
        "editorOverviewRuler.addedForeground": darkgray,
        "editorOverviewRuler.border": slate,
        "editorOverviewRuler.bracketMatchForeground": darkgray,
        "editorOverviewRuler.commonContentForeground": darkgray,
        "editorOverviewRuler.currentContentForeground": darkgray,
        "editorOverviewRuler.deletedForeground": darkgray,
        "editorOverviewRuler.errorForeground": rock,
        "editorOverviewRuler.findMatchForeground": darkgray,
        "editorOverviewRuler.incomingContentForeground": darkgray,
        "editorOverviewRuler.infoForeground": darkgray,
        "editorOverviewRuler.modifiedForeground": darkgray,
        "editorOverviewRuler.rangeHighlightForeground": darkgray,
        "editorOverviewRuler.selectionHighlightForeground": darkgray,
        "editorOverviewRuler.warningForeground": darkgray,
        "editorOverviewRuler.wordHighlightForeground": darkgray,
        "editorOverviewRuler.wordHighlightStrongForeground": darkgray,
        "editorPane.background": a(fg0, "77"),
        "editorRuler.foreground": fg0,
        "editorSuggestWidget.background": bg0,
        "editorSuggestWidget.border": a(slate, "BB"),
        "editorSuggestWidget.foreground": fg0,
        "editorSuggestWidget.highlightForeground": fg0,
        "editorSuggestWidget.selectedBackground": slate,
        "editorUnnecessaryCode.border": a(slate, "BB"),
        "editorUnnecessaryCode.opacity": a(fg0, "BB"),
        "editorWarning.border": a(slate, "BB"),
        "editorWarning.foreground": fg0,
        "editorWhitespace.foreground": a(fg0, "50"),
        "editorWidget.background": bg0,
        "editorWidget.border": a(slate, "BB"),
        "editorWidget.foreground": fg0,
        "editorWidget.resizeBorder": a(fg0, "77"),
        errorForeground: fg0,
        "extensionBadge.remoteBackground": bg0,
        "extensionBadge.remoteForeground": fg0,
        "extensionButton.prominentBackground": bg0,
        "extensionButton.prominentForeground": fg0,
        "extensionButton.prominentHoverBackground": bg0,
        focusBorder: a(slate, "BB"),
        foreground: fg0,
        "gitDecoration.addedResourceForeground": fg0,
        "gitDecoration.conflictingResourceForeground": fg0,
        "gitDecoration.deletedResourceForeground": fg0,
        "gitDecoration.ignoredResourceForeground": a(slate, "BB"),
        "gitDecoration.modifiedResourceForeground": fg0,
        "gitDecoration.submoduleResourceForeground": fg0,
        "gitDecoration.untrackedResourceForeground": fg0,
        "icon.foreground": fg0,
        "imagePreview.border": a(slate, "BB"),
        "input.background": bg0,
        "input.border": a(slate, "BB"),
        "input.foreground": fg0,
        "input.placeholderForeground": a(slate, "BB"),
        "inputOption.activeBackground": darkgray,
        "inputOption.activeBorder": a(slate, "BB"),
        "inputValidation.errorBackground": rock,
        "inputValidation.errorBorder": bg1,
        "inputValidation.errorForeground": bg0,
        "inputValidation.infoBackground": ocean,
        "inputValidation.infoBorder": bg1,
        "inputValidation.infoForeground": bg0,
        "inputValidation.warningBackground": caution,
        "inputValidation.warningBorder": bg1,
        "inputValidation.warningForeground": bg0,
        "list.activeSelectionBackground": fg_,
        "list.activeSelectionForeground": bg0,
        "list.dropBackground": a(fg0, "22"),
        "list.errorForeground": rock,
        "list.filterMatchBackground": bg0,
        "list.filterMatchBorder": a(slate, "BB"),
        "list.focusBackground": bg0,
        "list.focusForeground": fg0,
        "list.highlightForeground": fg0,
        "list.hoverBackground": darkgray,
        "list.hoverForeground": fg0,
        "list.inactiveFocusBackground": darkgray,
        "list.inactiveSelectionBackground": bg2,
        "list.inactiveSelectionForeground": fg0,
        "list.invalidItemForeground": fg0,
        "list.warningForeground": caution,
        "listFilterWidget.background": bg0,
        "listFilterWidget.noMatchesOutline": caution,
        "listFilterWidget.outline": fg0,
        "menu.background": bg0,
        "menu.border": a(slate, "BB"),
        "menu.foreground": fg0,
        "menu.selectionBackground": darkgray,
        "menu.selectionBorder": darkgray,
        "menu.selectionForeground": bg0,
        "menu.separatorBackground": darkgray,
        "menubar.selectionBackground": darkgray,
        "menubar.selectionBorder": a(slate, "BB"),
        "menubar.selectionForeground": fg0,
        "merge.border": a(slate, "BB"),
        "merge.commonContentBackground": bg0,
        "merge.commonHeaderBackground": bg0,
        "merge.currentContentBackground": bg0,
        "merge.currentHeaderBackground": bg0,
        "merge.incomingContentBackground": bg0,
        "merge.incomingHeaderBackground": bg0,
        "minimap.errorHighlight": rock,
        "minimap.findMatchHighlight": ocean,
        "minimap.selectionHighlight": lightgray,
        "minimap.warningHighlight": caution,
        "minimapGutter.addedBackground": forest,
        "minimapGutter.deletedBackground": rock,
        "minimapGutter.modifiedBackground": caution,
        "notificationCenter.border": a(slate, "BB"),
        "notificationCenterHeader.background": bg0,
        "notificationCenterHeader.foreground": fg0,
        "notificationLink.foreground": fg0,
        "notifications.background": bg0,
        "notifications.border": a(slate, "BB"),
        "notifications.foreground": fg0,
        "notificationsErrorIcon.foreground": rock,
        "notificationsInfoIcon.foreground": ocean,
        "notificationsWarningIcon.foreground": caution,
        "notificationToast.border": a(slate, "BB"),
        "panel.background": bg0,
        "panel.border": a(slate, "BB"),
        "panel.dropBackground": a(fg0, "22"),
        "panelInput.border": a(slate, "BB"),
        "panelTitle.activeBorder": a(slate, "BB"),
        "panelTitle.activeForeground": fg0,
        "panelTitle.inactiveForeground": a(slate, "BB"),
        "peekView.border": a(slate, "BB"),
        "peekViewEditor.background": bg0,
        "peekViewEditor.matchHighlightBackground": bg0,
        "peekViewEditor.matchHighlightBorder": a(slate, "BB"),
        "peekViewEditorGutter.background": bg0,
        "peekViewResult.background": bg0,
        "peekViewResult.fileForeground": fg0,
        "peekViewResult.lineForeground": fg0,
        "peekViewResult.matchHighlightBackground": bg0,
        "peekViewResult.selectionBackground": bg2,
        "peekViewResult.selectionForeground": fg0,
        "peekViewTitle.background": bg0,
        "peekViewTitleDescription.foreground": fg0,
        "peekViewTitleLabel.foreground": fg0,
        "pickerGroup.border": a(slate, "BB"),
        "pickerGroup.foreground": fg0,
        "problemsErrorIcon.foreground": rock,
        "problemsInfoIcon.foreground": ocean,
        "problemsWarningIcon.foreground": caution,
        "progressBar.background": bg0,
        "quickInput.background": bg0,
        "quickInput.foreground": fg0,
        "scrollbar.shadow": a(fg0, "33"),
        "scrollbarSlider.activeBackground": a(fg0, "33"),
        "scrollbarSlider.background": a(fg0, "33"),
        "scrollbarSlider.hoverBackground": a(fg0, "33"),
        "searchEditor.findMatchBackground": bg0,
        "searchEditor.findMatchBorder": a(slate, "BB"),
        "searchEditor.textInputBorder": a(slate, "BB"),
        "selection.background": fg__,
        "settings.checkboxBackground": bg0,
        "settings.checkboxBorder": a(slate, "BB"),
        "settings.checkboxForeground": fg0,
        "settings.dropdownBackground": bg0,
        "settings.dropdownBorder": a(slate, "BB"),
        "settings.dropdownForeground": fg0,
        "settings.dropdownListBorder": a(slate, "BB"),
        "settings.headerForeground": fg0,
        "settings.modifiedItemIndicator": a(slate, "BB"),
        "settings.numberInputBackground": bg0,
        "settings.numberInputBorder": a(slate, "BB"),
        "settings.numberInputForeground": fg0,
        "settings.textInputBackground": bg0,
        "settings.textInputBorder": a(slate, "BB"),
        "settings.textInputForeground": fg0,
        "sideBar.background": bg0,
        "sideBar.border": a(slate, "BB"),
        "sideBar.dropBackground": a(fg0, "22"),
        "sideBar.foreground": fg0,
        "sideBarSectionHeader.background": bg1,
        "sideBarSectionHeader.border": a(slate, "BB"),
        "sideBarSectionHeader.foreground": fg0,
        "sideBarTitle.foreground": fg0,
        "statusBar.background": bg0,
        "statusBar.border": a(slate, "BB"),
        "statusBar.debuggingBackground": fg__,
        "statusBar.debuggingBorder": a(slate, "BB"),
        "statusBar.debuggingForeground": bg0,
        "statusBar.foreground": fg0,
        "statusBar.noFolderBackground": bg0,
        "statusBar.noFolderBorder": a(slate, "BB"),
        "statusBar.noFolderForeground": fg0,
        "statusBarItem.activeBackground": bg0,
        "statusBarItem.hoverBackground": bg3,
        "statusBarItem.prominentBackground": bg3,
        "statusBarItem.prominentForeground": fg0,
        "statusBarItem.prominentHoverBackground": a(slate, "BB"),
        "statusBarItem.remoteBackground": bg0,
        "statusBarItem.remoteForeground": fg0,
        "symbolIcon.arrayForeground": fg0,
        "symbolIcon.booleanForeground": fg0,
        "symbolIcon.classForeground": fg0,
        "symbolIcon.colorForeground": fg0,
        "symbolIcon.constantForeground": fg0,
        "symbolIcon.constructorForeground": fg0,
        "symbolIcon.enumeratorForeground": fg0,
        "symbolIcon.enumeratorMemberForeground": fg0,
        "symbolIcon.eventForeground": fg0,
        "symbolIcon.fieldForeground": fg0,
        "symbolIcon.fileForeground": fg0,
        "symbolIcon.folderForeground": fg0,
        "symbolIcon.functionForeground": fg0,
        "symbolIcon.interfaceForeground": fg0,
        "symbolIcon.keyForeground": fg0,
        "symbolIcon.keywordForeground": fg0,
        "symbolIcon.methodForeground": fg0,
        "symbolIcon.moduleForeground": fg0,
        "symbolIcon.namespaceForeground": fg0,
        "symbolIcon.nullForeground": fg0,
        "symbolIcon.numberForeground": fg0,
        "symbolIcon.objectForeground": fg0,
        "symbolIcon.operatorForeground": fg0,
        "symbolIcon.packageForeground": fg0,
        "symbolIcon.propertyForeground": fg0,
        "symbolIcon.referenceForeground": fg0,
        "symbolIcon.snippetForeground": fg0,
        "symbolIcon.stringForeground": fg0,
        "symbolIcon.structForeground": fg0,
        "symbolIcon.textForeground": fg0,
        "symbolIcon.typeParameterForeground": fg0,
        "symbolIcon.unitForeground": fg0,
        "symbolIcon.variableForeground": fg0,
        "tab.activeBackground": bg3,
        "tab.activeBorder": a(bg0, "00"),
        "tab.activeBorderTop": a(bg0, "00"),
        "tab.activeForeground": fg1,
        "tab.activeModifiedBorder": a(slate, "BB"),
        "tab.border": a(bg0, "00"),
        "tab.hoverBackground": darkgray,
        "tab.hoverBorder": a(bg0, "00"),
        "tab.inactiveBackground": bg0,
        "tab.inactiveForeground": lightgray,
        "tab.inactiveModifiedBorder": a(bg0, "00"),
        "tab.unfocusedActiveBackground": bg0,
        "tab.unfocusedActiveBorder": a(bg0, "00"),
        "tab.unfocusedActiveBorderTop": bg0,
        "tab.unfocusedActiveForeground": fg0,
        "tab.unfocusedActiveModifiedBorder": bg0,
        "tab.unfocusedHoverBackground": darkgray,
        "tab.unfocusedHoverBorder": bg0,
        "tab.unfocusedInactiveForeground": darkgray,
        "tab.unfocusedInactiveModifiedBorder": a(bg0, "00"),
        "terminal.ansiBlack": bg2,
        "terminal.ansiBrightBlack": gray,
        "terminal.ansiBlue": sky,
        "terminal.ansiBrightBlue": sky,
        "terminal.ansiMagenta": sand,
        "terminal.ansiBrightMagenta": salmon,
        "terminal.ansiGreen": grass,
        "terminal.ansiBrightGreen": forest,
        "terminal.ansiRed": sand,
        "terminal.ansiBrightRed": rock,
        "terminal.ansiCyan": sea,
        "terminal.ansiBrightCyan": ocean,
        "terminal.ansiYellow": caution,
        "terminal.ansiBrightYellow": wildflower,
        "terminal.ansiWhite": fg0,
        "terminal.ansiBrightWhite": fg2,
        "terminal.background": bg0,
        "terminal.border": a(slate, "BB"),
        "terminal.foreground": fg0,
        "terminal.selectionBackground": sun,
        "terminalCursor.background": sun,
        "terminalCursor.foreground": fg0,
        "textBlockQuote.background": bg0,
        "textBlockQuote.border": a(slate, "BB"),
        "textCodeBlock.background": bg0,
        "textLink.activeForeground": fg0,
        "textLink.foreground": a(slate, "BB"),
        "textPreformat.foreground": fg0,
        "textSeparator.foreground": fg0,
        "titleBar.activeBackground": bg0,
        "titleBar.activeForeground": fg0,
        "titleBar.border": slate,
        "titleBar.inactiveBackground": bg0,
        "titleBar.inactiveForeground": fg0,
        "tree.indentGuidesStroke": fg__,
        "walkThrough.embeddedEditorBackground": bg0,
        "welcomePage.background": bg0,
        "welcomePage.buttonBackground": bg3,
        "welcomePage.buttonHoverBackground": darkgray,
        "widget.shadow": a(fg0, "33"),
        "window.activeBorder": darkgray,
        "window.inactiveBorder": gray
    },
    semanticTokenColors: {
        "class": fg0
    },
    tokenColors: [
        {
            "scope": [
                "comment"
            ],
            "settings": {
                "foreground": comment,
                "fontStyle": "italic"
            }
        },
        {
            "scope": [
                "keyword.operator",
                "keyword.operator.type.annotation",
            ],
            "settings": {
                "foreground": fg_
            }
        },
        {
            "scope": [
                "keyword.operator.expression.typeof"
            ],
            "settings": {
                "foreground": fg_,
                "fontStyle": "bold"
            }
        },
        {
            "scope": [
                "meta.decorator",
                "keyword.control.import",
                "keyword.control.export",
                "keyword.control.from",
                "keyword.control.loop",
                "meta.declaration.module.haskell",
                "meta.import.haskell"
            ],
            "settings": {
                "foreground": wildflower
            }
        },
        {
            "scope": [
                "meta.brace.round",
                "punctuation.definition.parameters",
                "meta.brace.square",
                "punctuation.separator.comma",
                "punctuation.definition.typeparameters"
            ],
            "settings": {
                "foreground": fg0,
                "fontStyle": "normal"
            }
        },
        {
            "scope": [
                "class"
            ],
            "settings": {
                "foreground": fg0
            }
        },
        {
            "scope": [
                "meta.type.annotation",
                "keyword.operator.type",
                "meta.type.parameters",
                "meta.return.type",
                "storage.type"
            ],
            "settings": {
                "foreground": type,
                "fontStyle": "bold"
            }
        },
        {
            "scope": [
                "storage.type.function",
                "keyword.control.flow"
            ],
            "settings": {
                "foreground": salmon,
                "fontStyle": "bold"
            }
        },
        {
            "scope": [
                "constant.character",
                "string"
            ],
            "settings": {
                "foreground": grass
            }
        },
        {
            "scope": [
                "constant.character.escape"
            ],
            "settings": {
                "foreground": sand
            }
        },
        {
            "scope": [
                "keyword.operator.ternary",
                "keyword.control.conditional"
            ],
            "settings": {
                "foreground": sky
            }
        },
        {
            "scope": [
                "storage",
                "keyword.operator.expression.is"
            ],
            "settings": {
                "foreground": sea
            }
        },
        {
            "scope": [
                "constant.language.boolean",
                "constant.numeric"
            ],
            "settings": {
                "foreground": sun
            }
        },
        {
            "scope": [
                "strong"
            ],
            "settings": {
                "fontStyle": "bold"
            }
        },
        {
            "scope": [
                "invalid"
            ],
            "settings": {
                "foreground": "#bbbbbb88",
                "fontStyle": "italic underline"
            }
        }
    ]
};
fs_1.default.writeFileSync(functorThemePath, JSON.stringify(functorTheme));
