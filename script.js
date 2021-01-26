const elements = [
    {
        tag: '<html>',
        content: ['head', 'body'],
        name: 'root',
        description: 'Top level element that the whole website goes into.',
        attributes: ['lang'],
        documentLimit: 1,
        group: 'root'
    },
    {
        tag: '<head>',
        content: ['base', 'link', 'meta', 'style', 'title'],
        name: 'head',
        description: 'Contains metadata about the document.',
        attributes: null,
        documentLimit: 1,
        group: 'meta'
    },
    {
        tag: '<title>',
        content: 'text',
        name: 'title',
        description:
            'Defines the document title displayed in the browser, on search results, etc.',
        attributes: null,
        documentLimit: 1,
        group: 'meta'
    },
    {
        tag: '<link>',
        content: false,
        name: 'link',
        description:
            'Links to an external resource such as a CSS file, site favicon.',
        attributes: ['rel', 'href'],
        documentLimit: false,
        group: 'meta'
    },
    {
        tag: '<meta>',
        content: false,
        name: 'metadata',
        description: 'Metadata that is not represented by other meta elements',
        attributes: [],
        documentLimit: false,
        group: 'meta'
    },
    {
        tag: '<style>',
        content: ['css'],
        name: 'style',
        description: 'Contains CSS styling',
        attributes: ['type', 'media', 'nonce', 'title'],
        documentLimit: false,
        group: 'meta'
    },
    {
        tag: '<base>',
        content: false,
        name: 'base',
        description: 'Base URL for all relative URLs in the document.',
        attributes: ['href', 'target'],
        documentLimit: 1,
        group: 'meta'
    },
    {
        tag: '<body>',
        content: ['document'],
        name: 'body',
        description: 'Section root for the document content',
        attributes: [],
        documentLimit: 1,
        group: 'section'
    },
    {
        tag: '<address>',
        content: 'Contact information for a given entity',
        name: 'address',
        description: 'Indicates a contact information section',
        attributes: [],
        documentLimit: false,
        group: 'section'
    },
    {
        tag: '<article>',
        content: 'Self-contained composition',
        name: 'article',
        description: 'Represents a section that can make sense on its own',
        attributes: [],
        documentLimit: false,
        group: 'section'
    },
    {
        tag: '<aside>',
        content: 'Indirectly related content',
        name: 'aside',
        description:
            'Represents a section that is indirectly related to the rest of the document',
        attributes: [],
        documentLimit: false,
        group: 'section'
    },
    {
        tag: '<footer>',
        content: 'Footer content',
        name: 'footer',
        description:
            'Footer for the nearest parent section. Footers typically contain author, copyright data or links to related documents.',
        attributes: [],
        documentLimit: false,
        group: 'section'
    },
    {
        tag: '<header>',
        content: 'Header content',
        name: 'header',
        description:
            'Introductory content and navigational aids. May contain some heading elements, a logo, search form, author name etc.',
        attributes: [],
        documentLimit: false,
        group: 'section'
    },
    {
        tag: ['<h1>', '<h2>', '<h3>', '<h4>', '<h5>', '<h6>'],
        content: 'Heading text',
        name: 'heading',
        description: 'Section headings',
        attributes: [],
        documentLimit: false,
        group: 'section'
    },
    {
        tag: '<hgroup>',
        content: 'Set of heading elements',
        name: 'heading group',
        description: 'Represents a multi-level heading for a section',
        attributes: [],
        documentLimit: false,
        group: 'section'
    },
    {
        tag: '<main>',
        content: 'Dominent content of the body',
        name: 'main',
        description:
            'Consists of content that is directly related to the central topic or functionality of the document or application',
        attributes: [],
        documentLimit: true,
        group: 'section'
    },
    {
        tag: '<nav>',
        content: 'Navigation links',
        name: 'navigation',
        description:
            'Provides navigation links to other documents or sections within the document. Can be a menu, table of contents, index',
        attributes: [],
        documentLimit: false,
        group: 'section'
    },
    {
        tag: '<section>',
        content: 'Standalone section',
        name: 'section',
        description:
            'Represents a standalone section for content that does not have a more specific element to represent it',
        attributes: [],
        documentLimit: false,
        group: 'section'
    }
]
