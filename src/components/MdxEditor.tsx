'use client'
import type { ForwardedRef } from 'react'
import '@mdxeditor/editor/style.css'
import {
    ButtonWithTooltip,
    ChangeAdmonitionType,
    DialogButton,
    InsertFrontmatter,
    InsertTable,
    InsertThematicBreak,
    jsxPlugin,
    type MDXEditorMethods,
    type MDXEditorProps
} from '@mdxeditor/editor'

import {
    AdmonitionDirectiveDescriptor,
    MDXEditor,
    UndoRedo,
    codeBlockPlugin,
    codeMirrorPlugin,
    diffSourcePlugin,
    directivesPlugin,
    frontmatterPlugin,
    headingsPlugin,
    imagePlugin,
    linkDialogPlugin,
    linkPlugin,
    listsPlugin,
    markdownShortcutPlugin,
    quotePlugin,
    sandpackPlugin,
    tablePlugin,
    thematicBreakPlugin,
    toolbarPlugin,
    Separator,
    BlockTypeSelect,
    BoldItalicUnderlineToggles,
    CreateLink,
    DiffSourceToggleWrapper,
    InsertImage,
    ListsToggle,
    KitchenSinkToolbar
} from '@mdxeditor/editor'

export default function InitializedMDXEditor({
    editorRef,
    ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {

    const pluginOptions = [
        headingsPlugin(),
        diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown: 'Previous Code' }),
        jsxPlugin(),
        listsPlugin(),
        listsPlugin(),
        quotePlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        imagePlugin({ imageAutocompleteSuggestions: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'] }),
        tablePlugin(),
        thematicBreakPlugin(),
        frontmatterPlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: 'txt' }),
        markdownShortcutPlugin()
    ]

    if(!props.readOnly){
        pluginOptions.push(toolbarPlugin({
            toolbarContents: () => (
                <>
                    {' '}
                    <UndoRedo />
                    <BoldItalicUnderlineToggles />
                    <ListsToggle />
                    <BlockTypeSelect />
                    <InsertImage />
                    <CreateLink />
                    <Separator />
                    <InsertFrontmatter />
                    <InsertTable />
                    <InsertThematicBreak />
                    {/* <DialogButton onSubmit={function (value: string): void {
                        throw new Error('Function not implemented.')
                    }} tooltipTitle={'Title'} dialogInputPlaceholder={'Here'} submitButtonTitle={'Hello World'} />

                    <ButtonWithTooltip title={'Click Me'} /> */}
                    <DiffSourceToggleWrapper children={undefined} />
                    {/* <KitchenSinkToolbar /> */}
                </>
            )
        }))
    }
    return (
        <MDXEditor
            plugins={pluginOptions}
            {...props}
            ref={editorRef}
        />
    )
}