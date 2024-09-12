let BASE_URL: string
if (import.meta.env.PROD) {
  BASE_URL = 'http://152.136.185.210:4000'
} else {
  BASE_URL = 'http://codercba.com:5000'
}

export const TIMEOUT = 100000
export { BASE_URL }
