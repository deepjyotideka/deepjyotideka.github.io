// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-group",
          title: "Group",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/group/";
          },
        },{id: "news-point-right-open-post-doctoral-position-in-reinforcement-learning-and-topology-control-in-transmission-grids-apply-here",
          title: ':point_right: Open Post-doctoral position in reinforcement learning and topology control in transmission grids....',
          description: "",
          section: "News",},{id: "news-2026-10-20-new-paper-on-design-of-coordinated-dynamic-operating-envelopes-at-the-grid-edge-published-in-ieee-transactions-on-smart-grid-2026-09-02-new-pre-print-on-self-supervised-learning-for-ac-opf-in-distribution-systems-on-arxiv-2026-08-17-new-preprint-on-turning-data-centers-into-grid-assets-via-storage-compute-co-optimization-on-arxiv",
          title: '2026-10-20: New paper on design of coordinated dynamic operating envelopes at the grid...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
