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
        },{id: "news-point-right-open-post-doctoral-position-in-dynamic-modeling-and-stability-studies-for-data-center-loads-point-right-open-post-doctoral-position-in-agentic-ai-for-surrogate-models-in-power-grids-and-networked-systems-apply-here-point-right-open-post-doctoral-position-in-machine-learning-and-reinforcement-learning-in-distribution-grids",
          title: ':point_right: Open Post-doctoral position in dynamic modeling and stability studies for data-center loads....',
          description: "",
          section: "News",},{id: "news-2026-06-10-paper-on-adaptive-voltage-control-under-topology-changes-published-in-epsr-special-issue-on-power-systems-computation-conference-2026-05-15-new-preprint-on-turning-data-centers-into-grid-assets-via-storage-compute-co-optimization-on-arxiv-2026-05-12-new-paper-on-equitable-budget-allocation-for-household-retrofitting-published-in-pnas-nexus",
          title: '2026-06-10: Paper on adaptive voltage control under topology changes published in EPSR (special...',
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
