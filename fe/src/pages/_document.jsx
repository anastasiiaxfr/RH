import Document, { Html, Head, Main, NextScript } from "next/document"
import { seo, schema } from "../constants/seo"
import SeoMeta from "../components/seo"


function MyDocument() {
    return (
        <Html>
            <Head>
                <SeoMeta seo={seo} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                ></script>

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default MyDocument