const treeTheme = {
  tree: {
    base: {
      listStyle: 'none',
      backgroundColor: '#ffffff',
      margin: 0,
      padding: 0,
      color: '#333333',
      fontFamily: 'lucida grande ,tahoma,verdana,arial,sans-serif',
      fontSize: '14px',
    },
    node: {
      base: {
        position: 'relative' as 'relative',
      },
      link: {
        cursor: 'pointer',
        position: 'relative' as 'relative',
        padding: '0px 5px',
        display: 'block',
      },
      activeLink: {
        background: '#dedede',
      },
      toggle: {
        base: {
          position: 'relative' as 'relative',
          display: 'inline-block',
          verticalAlign: 'top',
          marginLeft: '-5px',
          height: '24px',
          width: '24px',
        },
        wrapper: {
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          margin: '-7px 0 0 -7px',
          height: '14px',
        },
        height: 14,
        width: 14,
        arrow: {
          fill: '#888888',
          strokeWidth: 0,
        },
      },
      header: {
        base: {
          display: 'inline-block',
          verticalAlign: 'top',
          color: '#333333',
        },
        connector: {
          width: '2px',
          height: '12px',
          borderLeft: 'solid 2px black',
          borderBottom: 'solid 2px black',
          position: 'absolute' as 'absolute',
          top: '0px',
          left: '-21px',
        },
        title: {
          lineHeight: '24px',
          verticalAlign: 'middle',
        },
      },
      subtree: {
        listStyle: 'none',
        paddingLeft: '19px',
      },
      loading: {
        color: '#2196f3',
      },
    },
  },
}

export default treeTheme
