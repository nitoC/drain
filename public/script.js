window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'G-FLC2M0T219');




var ExitBoxSettings = {
    exitbox_version: '1.9.1',
    siteroot: 'moonbeam.network',
    siteurl: '',
    title: "You're Leaving the Moonbeam Website",
    body: '<p>You are now leaving the Moonbeam Network for an independent, third-party website that is not affiliated with Moonbeam or the Moonbeam Foundation. \r\n<\/p>',
    GoButtonText: 'Continue to External Site',
    Include_URL: '',
    CancelButtonText: 'Cancel',
    alt_title: 'Thank you for visiting our website',
    alt_body:
        '<p>The link you have selected is located on another server.  The linked site contains information that has been created, published, maintained, or otherwise posted by institutions or organizations independent of this organization.  We do not endorse, approve, certify, or control any linked websites, their sponsors, or any of their policies, activities, products, or services.  We do not assume responsibility for the accuracy, completeness, or timeliness of the information contained therein.  Visitors to any linked websites should not use or rely on the information contained therein until they have consulted with an independent financial professional.<\/p> <p>Please click “Go to URL…” to leave this website and proceed to the selected site.<\/p>',
    alt_GoButtonText: 'Go to URL...',
    alt_Include_URL: 'on',
    alt_CancelButtonText: 'Cancel',
    alt_classname: 'altExitNotifier',
    activate_custom_content: 'on',
    apply_to_all_offsite_links: '',
    jquery_selector_field:
        'a[href*="\/\/"]:not([href*="moonbeam.network"]):not([href*="moonbeam.foundation"]):not([href*="purestake.com"]):not([href*="youtube.com"])',
    new_window: '',
    css_exclusion_class: 'noExitNotifier',
    relnofollow: 'on',
    enable_notifier_for_forms: '',
    apply_to_all_offsite_forms: 'on',
    jquery_form_selector_field:
        'form[action*="\/\/"]:not([action*="moonbeam.network"])',
    sa2_or_jAlert: 'sa2',
    theme: 'default',
    backgroundcolor: 'black',
    blurbackground: 'on',
    size: 'xsm',
    showAnimation: 'fadeIn',
    hideAnimation: 'fadeOut',
    visual: '',
    enable_timeout: '',
    timeout_text_continue: 'Continue in {seconds} seconds.',
    timeout_text_cancel: 'Cancel in {seconds} seconds.',
    continue_or_cancel: 'continue',
    timeout_seconds: '10',
    enable_progressbar: '',
    timeout_statement: 'on',
    custom_css:
        "background: #0684ce;\r\nbackground: -moz-linear-gradient(top,  #0684ce 0%, #1e5799 100%);\r\nbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#0684ce), color-stop(100%,#1e5799));\r\nbackground: -webkit-linear-gradient(top,  #0684ce 0%,#1e5799 100%);\r\nbackground: -o-linear-gradient(top,  #0684ce 0%,#1e5799 100%);\r\nbackground: -ms-linear-gradient(top,  #0684ce 0%,#1e5799 100%);\r\nbackground: linear-gradient(to bottom,  #0684ce 0%,#1e5799 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0684ce', endColorstr='#1e5799',GradientType=0 );\r\nborder: 3px solid #1e5799;",
    advanced_custom_css:
        '.swal2-styled.swal2-confirm {\r\n    background-color: #E1147B;\r\n    font-size: 14px;\r\n}\r\n.swal2-styled.swal2-cancel {\r\n    font-size: 14px;\r\n}\r\n.swal2-styled:focus {\r\n    outline: none;\r\n    box-shadow: none;\r\n}\r\n.swal2-title {\r\n    font-size: 1.3em;\r\n}\r\n.swal2-content p {\r\n    font-size: 15px;\r\n    padding-bottom: 0;\r\n}',
    addclasses: '',
    classestoadd: '',
    debugtoconsole: '',
};




window._wpemojiSettings = {
    baseUrl: 'https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/',
    ext: '.png',
    svgUrl: 'https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/',
    svgExt: '.svg',
    source: {
        concatemoji: '\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.4.2',
    },
};
/*! This file is auto-generated */
!(function (i, n) {
    var o, s, e;
    function c(e) {
        try {
            var t = { supportTests: e, timestamp: new Date().valueOf() };
            sessionStorage.setItem(o, JSON.stringify(t));
        } catch (e) { }
    }
    function p(e, t, n) {
        e.clearRect(0, 0, e.canvas.width, e.canvas.height),
            e.fillText(t, 0, 0);
        var t = new Uint32Array(
            e.getImageData(0, 0, e.canvas.width, e.canvas.height).data,
        ),
            r =
                (e.clearRect(0, 0, e.canvas.width, e.canvas.height),
                    e.fillText(n, 0, 0),
                    new Uint32Array(
                        e.getImageData(0, 0, e.canvas.width, e.canvas.height).data,
                    ));
        return t.every(function (e, t) {
            return e === r[t];
        });
    }
    function u(e, t, n) {
        switch (t) {
            case 'flag':
                return n(e, '🏳️‍⚧️', '🏳️​⚧️')
                    ? !1
                    : !n(e, '🇺🇳', '🇺​🇳') && !n(e, '🏴󠁧󠁢󠁥󠁮󠁧󠁿', '🏴​󠁧​󠁢​󠁥​󠁮​󠁧​󠁿');
            case 'emoji':
                return !n(e, '🫱🏻‍🫲🏿', '🫱🏻​🫲🏿');
        }
        return !1;
    }
    function f(e, t, n) {
        var r =
            'undefined' != typeof WorkerGlobalScope &&
                self instanceof WorkerGlobalScope
                ? new OffscreenCanvas(300, 150)
                : i.createElement('canvas'),
            a = r.getContext('2d', { willReadFrequently: !0 }),
            o = ((a.textBaseline = 'top'), (a.font = '600 32px Arial'), {});
        return (
            e.forEach(function (e) {
                o[e] = t(a, e, n);
            }),
            o
        );
    }
    function t(e) {
        var t = i.createElement('script');
        (t.src = e), (t.defer = !0), i.head.appendChild(t);
    }
    'undefined' != typeof Promise &&
        ((o = 'wpEmojiSettingsSupports'),
            (s = ['flag', 'emoji']),
            (n.supports = { everything: !0, everythingExceptFlag: !0 }),
            (e = new Promise(function (e) {
                i.addEventListener('DOMContentLoaded', e, { once: !0 });
            })),
            new Promise(function (t) {
                var n = (function () {
                    try {
                        var e = JSON.parse(sessionStorage.getItem(o));
                        if (
                            'object' == typeof e &&
                            'number' == typeof e.timestamp &&
                            new Date().valueOf() < e.timestamp + 604800 &&
                            'object' == typeof e.supportTests
                        )
                            return e.supportTests;
                    } catch (e) { }
                    return null;
                })();
                if (!n) {
                    if (
                        'undefined' != typeof Worker &&
                        'undefined' != typeof OffscreenCanvas &&
                        'undefined' != typeof URL &&
                        URL.createObjectURL &&
                        'undefined' != typeof Blob
                    )
                        try {
                            var e =
                                'postMessage(' +
                                f.toString() +
                                '(' +
                                [JSON.stringify(s), u.toString(), p.toString()].join(
                                    ',',
                                ) +
                                '));',
                                r = new Blob([e], { type: 'text/javascript' }),
                                a = new Worker(URL.createObjectURL(r), {
                                    name: 'wpTestEmojiSupports',
                                });
                            return void (a.onmessage = function (e) {
                                c((n = e.data)), a.terminate(), t(n);
                            });
                        } catch (e) { }
                    c((n = f(s, u, p)));
                }
                t(n);
            })
                .then(function (e) {
                    for (var t in e)
                        (n.supports[t] = e[t]),
                            (n.supports.everything =
                                n.supports.everything && n.supports[t]),
                            'flag' !== t &&
                            (n.supports.everythingExceptFlag =
                                n.supports.everythingExceptFlag && n.supports[t]);
                    (n.supports.everythingExceptFlag =
                        n.supports.everythingExceptFlag && !n.supports.flag),
                        (n.DOMReady = !1),
                        (n.readyCallback = function () {
                            n.DOMReady = !0;
                        });
                })
                .then(function () {
                    return e;
                })
                .then(function () {
                    var e;
                    n.supports.everything ||
                        (n.readyCallback(),
                            (e = n.source || {}).concatemoji
                                ? t(e.concatemoji)
                                : e.wpemoji && e.twemoji && (t(e.twemoji), t(e.wpemoji)));
                }));
})((window, document), window._wpemojiSettings);





{
    "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": "/#/schema/WebSite",
                "url": "/",
                "name": "Moonbeam Network",
                "description": "Cross-Chain Connected Smart Contract Platform",
                "inLanguage": "en-US",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "/search/{search_term_string}/"
                    },
                    "query-input": "required name=search_term_string"
                },
                "publisher": { "@id": "/#/schema/Organization" }
            },
            {
                "@type": "WebPage",
                "@id": "/",
                "url": "/",
                "name": "Moonbeam | Cross-Chain Connected Smart Contract Platform",
                "description": "Moonbeam is a smart contract platform for building cross-chain connected applications — enabling users to interact with multiple blockchains at the same time.",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "/#/schema/WebSite" },
                "breadcrumb": {
                    "@type": "BreadcrumbList",
                    "@id": "/#/schema/BreadcrumbList",
                    "itemListElement": {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Moonbeam Network"
                    }
                },
                "potentialAction": { "@type": "ReadAction", "target": "/" },
                "about": { "@id": "/#/schema/Organization" }
            },
            {
                "@type": "Organization",
                "@id": "/#/schema/Organization",
                "name": "Moonbeam Network",
                "url": "/",
                "sameAs": "https://twitter.com/moonbeamnetwork",
                "logo": {
                    "@type": "ImageObject",
                    "url": "/wp-content/uploads/2020/03/cropped-Moonbeam-Favicon-550px.png",
                    "contentUrl": "/wp-content/uploads/2020/03/cropped-Moonbeam-Favicon-550px.png",
                    "width": 512,
                    "height": 512
                }
            }
        ]
}

(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = '../www.googletagmanager.com/gtm5445.html?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-W7PPV78');


(function (window, document) {
    if (
        navigator.userAgent.match(
            /(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/,
        )
    ) {
        document.body.className += ' using-mobile-browser ';
    }

    if (!('ontouchstart' in window)) {
        var body = document.querySelector('body');
        var winW = window.innerWidth;
        var bodyW = body.clientWidth;

        if (winW > bodyW + 4) {
            body.setAttribute(
                'style',
                '--scroll-bar-w: ' + (winW - bodyW - 4) + 'px',
            );
        } else {
            body.setAttribute('style', '--scroll-bar-w: 0px');
        }
    }
})(window, document);
hbspt.forms.create({
    portalId: '6074164',
    formId:
        '67a926ab-fc40-4c82-adea-48050074f239',
});

var nectarLove = { "ajaxurl": "\/wp-admin\/admin-ajax.php", "postID": "12710", "rooturl": "", "loveNonce": "831102be1b" };
var pp_ajax_form = {
    ajaxurl: '\/wp-admin\/admin-ajax.php',
    confirm_delete: 'Are you sure?',
    deleting_text: 'Deleting...',
    deleting_error: 'An error occurred. Please try again.',
    nonce: '5ba9d43d96',
    disable_ajax_form: 'false',
    is_checkout: '0',
    is_checkout_tax_enabled: '0',
};
var nectarLove = {
    ajaxurl: '\/wp-admin\/admin-ajax.php',
    postID: '12710',
    rooturl: '',
    disqusComments: 'false',
    loveNonce: '831102be1b',
    mapApiKey: '',
};
var nectarOptions = {
    quick_search: 'false',
    mobile_header_format: 'default',
    left_header_dropdown_func: 'default',
    ajax_add_to_cart: '0',
    ocm_remove_ext_menu_items: 'remove_images',
    woo_product_filter_toggle: '0',
    woo_sidebar_toggles: 'true',
    woo_sticky_sidebar: '0',
    woo_minimal_product_hover: 'default',
    woo_minimal_product_effect: 'default',
    woo_related_upsell_carousel: 'false',
    woo_product_variable_select: 'default',
};
var nectar_front_i18n = { next: 'Next', previous: 'Previous' };
