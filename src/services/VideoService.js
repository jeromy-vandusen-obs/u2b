const videos = [
    {
        id: "x6Ng298HXcM",
        title: "Brett Kavanaugh Screams About His Innocence",
        url: "https://i.ytimg.com/vi/x6Ng298HXcM/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&amp;rs=AOn4CLDp7I86KOI4VBdInuty9LPD37PufA"
    },
    {
        id: "EweWaCekXRQ",
        title: "America's Got Talent Winner Shin Lim Stuns Jimmy Fallon with a Magic Trick",
        url: "https://i.ytimg.com/vi/EweWaCekXRQ/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&amp;rs=AOn4CLCmjiGIyqEJ5txYmIjPBwnf7iahEg"
    },
    {
        id: "YiNe82ZYiec",
        title: "Lindsey Graham explains his outrage over Kavanaugh hearing",
        url: "https://i.ytimg.com/vi/YiNe82ZYiec/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCdCHBsFG9G1rpbYXdHnQxcVDbLCw"
    },
    {
        id: "zEhpmh4xVHA",
        title: "Jimmy Kimmel on Kavanaugh Hearing",
        url: "https://i.ytimg.com/vi/zEhpmh4xVHA/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAlXy87Ew-JwajlcVEapGn9_y32yA"
    },
    {
        id: "egVlN-kBjZg",
        title: "Steve Bannon | Real Time with Bill Maher (HBO)",
        url: "https://i.ytimg.com/vi/egVlN-kBjZg/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBNhude6cs7u9PKxmsGLvbi0JLHlQ"
    },
    {
        id: "UvOm2oZRQIk",
        title: "What Makes John Bonham Such a Good Drummer?",
        url: "https://i.ytimg.com/vi/UvOm2oZRQIk/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDi08luuWhEYwYa6ONJDlZV15_nBQ"
    },
    {
        id: "7dCGvMgYmHc",
        title: "Best Norah Jones Songs - Norah Jones Greatest Hits Full Album",
        url: "https://i.ytimg.com/vi/7dCGvMgYmHc/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCpdFBeDK1kDe_Y04Mu9CJpf5qHDQ"
    },
    {
        id: "24jx6FgnS5o",
        title: "Disgusting Polie Abuse &amp; Harrasment Aggressive False Arrest",
        url: "https://i.ytimg.com/vi/24jx6FgnS5o/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCsF1Xn2CugOPEwQLkfgRlIG2gHPw"
    },
    {
        id: "sOA9NEmw32A",
        title: "Stairway To Heaven Jimmy Page Eric Clapton and Jeff Beck",
        url: "https://i.ytimg.com/vi/sOA9NEmw32A/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAr-tOe24f8mxYmLW_wxgYEWND9gQ"
    },
    {
        id: "E_jYkwWjgh8",
        title: "Sprit ~ Rockpalast 1978 (Full concert)",
        url: "https://i.ytimg.com/vi/E_jYkwWjgh8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDlo8Xbop_IFlEMwENVe2IC25RPbw"
    },
    {
        id: "uGxr1VQ2dPI",
        title: "Body Language: Brett Kavanaugh Hearing Christine Blasey Ford",
        url: "https://i.ytimg.com/vi/uGxr1VQ2dPI/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDF-CIGE_gp4fltHGsZ0qV6AfSyhg"
    },
    {
        id: "qw9k2F9OPVE",
        title: "(Pink Floyd) Another Brick In The Wall - Gabriella Quevedo",
        url: "https://i.ytimg.com/vi/qw9k2F9OPVE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBo7IAYVdoqUH1xWFKSXKY4qOmXew"
    }
];

export const getRecommendedVideos = () => {
    return videos;
};

export const getVideo = (id) => {
    return videos.filter(video => video.id === id)[0];
};
