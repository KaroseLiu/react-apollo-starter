import { graphql, compose } from 'react-apollo'
import Knowledge from './components/index'
import { queryPatientTest } from './actions/queries'

export default compose(
  graphql(queryPatientTest, {
    options: {
      variables: {
        patientId: '5a45a32a638f630001e01153',
      },
    },
  }),
)(Knowledge)
