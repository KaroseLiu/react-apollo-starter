import gql from 'graphql-tag'

export const queryPatientTest = gql`
  query QueryPatientTest($patientId: ID, $telephone: String) {
    patient(patientId: $patientId, telephone: $telephone) {
      _id
      nickname
      username
      gender
    }
  }
`
