import { Page, Document, Text, StyleSheet, View } from '@react-pdf/renderer'

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#ffffff'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

  export const Pdf = ({ data }) => (

    <Document>
      <Page size="letter" style={styles.page}>
        <View>
          <Text>{data.title}</Text>
          <Text>{data.content}</Text>
        </View>
      </Page>
    </Document>

  )
