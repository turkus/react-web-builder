export default {
  locale: 'en',
  breakpoint: {
    add: 'Add breakpoint',
    background: 'Background color',
    backgroundDefaultInfo: 'Default color is inherited from <a>page settings</a>',
    clear: 'Clear breakpoint',
    clearConfirm: 'Are you sure you want to clear this breakpoint?',
    delete: 'Delete breakpoint',
    deleteConfirm: 'Are you sure you want to remove this breakpoint?',
    edit: 'Edit breakpoint',
    errors: {
      alreadyExists: 'Breakpoint with this value already exists',
      biggerThanFrom: 'Should not be bigger than from value',
      horizontalPaddingTooBig: 'Horizontal padding (left + right) is too big (less than {{value}}px remains for width)',
      notGreaterOrEqualZero: 'Value is not greater or equal 0',
      notGreaterThan: 'Value is not greater than {{value}}',
      notNumber: 'Value is not a number',
      lowerThanMinimum: 'Lower than minimum {{value}}px',
      wontFitGrid: 'Some elements won\'t fit in new grid, please change their positions',
    },
    layout: 'Layout breakpoint',
    minWidth: 'Min width',
    numberOfColumns: 'Number of columns',
    rowHeight: 'Row height',
    stretchToAvailableWidth: 'Stretch to available width',
    tooltip: 'Select breakpoint or add a new one',
  },
  color: {
    custom: 'Custom colors',
    default: 'Default color',
    font: 'Font color',
    preset: 'Preset colors',
    remove: 'Click icon <icon /> to remove this color',
    transparentInfo: 'Current color is transparent. Change (A) value to make it visible',
  },
  common: {
    pixels: 'px',
  },
  configuration: {
    title: 'Configuration',
    tooltip: 'Configuration',
    autoFocusRichTextInEditProperties: {
      title: 'Autofocus editor',
      description: 'Activate cursor (focus) in text editor when opening edit properties of element',
    },
    mouseWheel: {
      title: 'Mouse wheel',
      description: 'Scroll breakpoint area with mouse wheel. When checked scroll vertical (mouse wheel), horizontal (shift + mouse wheel) and zoom (ctrl + mouse wheel) are available',
    },
    mouseWheelSpeed: {
      title: 'Mouse wheel speed',
    },
    autoSave: {
      title: 'Auto save',
      description: 'Save as draft on every change',
    },
    bringElementsAbove: {
      title: 'Grid elements',
      description: 'Automatically organize "jumped" elements vertically. When enabled, removes the empty space created when an element is dragged below others',
    },
    helpLines: {
      title: 'Grid helper',
      description: 'When enabled, numbers of columns will be displayed on both left and right side of a component being placed on the grid, allowing easier elements alignment',
    },
    tips: {
      button: 'Show helper tips',
      header: 'Tips',
      label: 'Click button below if you want to show helper tips again',
    },
    editOnDoubleClick: {
      title: 'Edit on double-click ',
      description: 'Require double-click on element to open editor',
    },
    preventCloseEditOnClick: {
      title: 'Close edit on click',
      description: 'Prevent closing editing properties of element when on click outside of it',
    },
  },
  element: {
    backgroundColor: 'Background color',
    border: {
      name: 'Border',
      color: 'Border color',
      radius: 'Border radius',
      padding: 'Border padding',
    },
    content: 'Content',
    copy: 'Copy element',
    copyAll: 'Copy all elements',
    copySelected: 'Copy elements',
    customButton: 'Custom button',
    customColor: 'Custom color',
    dashes: {
      gap: 'Dashes gap',
      width: 'Dashes width',
    },
    delete: 'Delete element',
    deleteSelected: 'Delete elements',
    deselect: 'Deselect',
    height: 'Height',
    iframe: {
      height: 'Iframe height',
      name: 'HTML iframe',
      src: 'Iframe source',
    },
    image: 'Image',
    imageUrl: 'Image source',
    imageLink: 'Link destination',
    line: {
      name: 'Line',
      dashed: 'Dashed',
      solid: 'Solid',
    },
    link: {
      set: 'Set link',
      openInNewTab: 'Open in new tab',
      url: 'url',
    },
    loading: 'Component is loading',
    removeEmptySpaceBelow: 'Remove empty space below',
    select: 'Select',
    selectAllAbove: 'Select elements above',
    selectAllBelow: 'Select elements below',
    separator: 'Separator',
    source: 'Link url',
    notFound: 'Component not found',
    padding: 'Padding',
    paste: 'Paste',
    text: 'Text',
    type: 'Type',
    video: 'Video',
  },
  errors: {
    somethingWentWrong: 'Something went wrong',
    unsavedChanges: 'Are you sure you want to leave?',
  },
  group: {
    basic: 'Basic',
    buttons: 'Buttons',
    other: 'Other',
  },
  history: {
    undo: 'Undo',
    redo: 'Redo',
  },
  hints: {
    addNewElement: 'Use sections to view elements. Drag and drop chosen elements to add them to your page',
    changeBreakpoint: 'Use this dropdown to switch between breakpoints (mobile or desktop)',
    configuration: 'Use this icon to manage your settings',
    confirm: 'ok',
    preview: 'Use this icon to preview your page',
    saveOrPublish: 'Use this button to save your page as draft or publish it',
  },
  page: {
    background: 'Background',
    settings: {
      title: 'Page settings',
      icon: {
        tooltip: 'Page settings',
      },
    },
    fontFamily: 'Font family',
  },
  publish: {
    name: 'Save / Publish',
    tooltip: 'Save all changes or publish page',
    draft: {
      label: 'Save as draft',
      pending: 'Waiting for save',
      success: 'Page is saved',
    },
    save: {
      label: 'Save and publish',
      pending: 'Waiting for publish',
      success: 'Page is saved and published',
    },
    exit: 'Exit',
  },
  preview: {
    tooltip: 'Preview changes',
  },
  selectNewElement: {
    title: 'Select new element',
  },
  separator: {
    why: 'This is separator element. It separates elements above and below.',
  },
  template: {
    loading: 'Loading template',
  },
  whySeparator: {
    close: 'Click anywhere to close',
    moveVerticaly: 'Look how this element will move vertically.',
    sticksHorizontally: 'Look how element sticks horizontally. it won\'t get above separator.',
    tooltip: 'Click to see why it is important to use separators',
  },
};
