export const HEADER_QUERY = `
query Header {
  header {
    background {
      responsiveImage(imgixParams: {auto: compress, w: "1600"}) {
        src
        webpSrcSet
        alt
      }
    }
  }
  home {
    title
    description(markdown: true)
  }
  allAbouts {
    id
    title
    iconPath
  }
  gallery {
    image {
      id
      responsiveImage(imgixParams: {auto: compress, w: "1000"}) {
        src
        alt
      }
      url(imgixParams: {auto: compress, w: "500"})
    }
  }
  contact {
    background {
      responsiveImage {
        src
        webpSrcSet
        alt
      }
    }
  }
}
`;
