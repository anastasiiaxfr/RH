
export const seo = {
    metaHeading: "SiteName | 💙💛",
    metaDescription: "SiteName Description",
    metaSiteName: "SiteName",
    metaLocale: "en",
    metaURL: `${process.env.NEXT_PUBLIC_HOST}`,
    //metaImg: `${process.env.NEXT_PUBLIC_HOST}/og.jpg`,
    metaImg: "og.jpg",
    metaImgWidth: "600",
    metaImgHeight: "314",
};

export const schema = {
    "@context": "http://schema.org/",
    "@type": "Organization",
    name: "SiteName",
    brand: "SiteName",
    alternateName: "SiteName",
    url: process.env.NEXT_PUBLIC_HOST,
    logo: `${process.env.NEXT_PUBLIC_HOST}/logo.svg`,
    address: {
        "@type": "PostalAddress",
        streetAddress: " ",
        addressLocality: "",
        postalCode: "",
        addressCountry: "a",
    },
    contactPoint: [
        {
            "@type": "ContactPoint",
            telephone: "",
            email: "info@SiteName.com",
            contactType: "customer support",
            areaServed: "US",
            availableLanguage: ["English"],
        },
    ],
    sameAs: [
        "https://www.facebook.com/SiteName",
        "https://twitter.com/SiteName",
        "https://www.linkedin.com/company/SiteName",
        "https://www.instagram.com/SiteName",
    ],
};
