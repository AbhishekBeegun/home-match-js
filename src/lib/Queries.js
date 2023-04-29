import { gql } from "@apollo/client";


export const HOMEHOUSES_QUERY = gql`
query MyQuery {
    houses {
        agency {
          ... on Agency {
            name
            agencylogo {
              url
            }
            slug
          }
        }
        coverPhoto {
          url
        }
        location
        price
        title
        slug
      }
}
`; 

export const TOPAGENCIES_QUERY = gql`
query MyQuery {
    agencies {
        slug
        name
        agencylogo {
          url
        }
      }
}
`; 

export const HOMELANDS_QUERY = gql`
query MyQuery {
    lands {
        agency {
          ... on Agency {
            name
            slug
            agencylogo {
              url
            }
          }
        }
        coverPhoto {
          url
        }
        location
        price
        title
        slug
      }
}
`; 

export const LAND_DETAILS = gql `
query MyQuery ($slug: String){
  land(where: {slug: $slug}) {
    agency {
      ... on Agency {
        email
        agencylogo {
          url
        }
        address
        name
        phonenumber
      }
    }
    coverPhoto {
      url
    }
    location
    map {
      latitude
      longitude
    }
    price
    title
    fulldesc
    size
  }
  }
  `

  export const HOUSE_DETAILS = gql `
query MyQuery ($slug: String){
  house(where: {slug: $slug}) {
    agency {
      ... on Agency {
        email
        address
        agencylogo {
          url
        }
        name
        phonenumber
      }
    }
    coverPhoto {
      url
    }
    fulldesc
    location
    map {
      latitude
      longitude
    }
    nearsea
    pool
    price
    propertysize
    room
    slug
    title
  }
  
  }
  `



