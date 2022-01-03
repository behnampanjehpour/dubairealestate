import { Box } from '@chakra-ui/layout'

const getYear = () => {
  return new Date().getFullYear()
}
const Footer = () => (
  <Box
    textAlign='center'
    p='5'
    color='gray.600'
    borderTop='1px'
    borderColor='gray.100'
  >
    © {getYear()} Dubai Real Estate, Inc.
  </Box>
)

export default Footer
