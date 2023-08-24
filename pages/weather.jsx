

const Weather = ({ weather, temperature}) => {
    return(
        <View>
            <View>
                <MaterialCommunityIcons/>
                <Text>{temperature}</Text>
            </View>
            <View>
                <Text>{weather}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1,
        backgroundColor: '#f7b733'
      },
      headerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      },
      tempText: {
        fontSize: 48,
        color: "orange"
      },
      bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: "flex-end",
        paddingLeft: 25,
        marginBottom: 40
      },
      title: {
        fontSize: 48,
        color: "white"
      }
})
.weatherContainer {
    flex: 1;
    backgroundColor: '#f7b733'
  }
.headerContainer {
    flex: 1;
    alignItems: 'center';
    justifyContent: 'center'
  }
.tempText {
    fontSize: 48;
    color: '#fff'
}
.bodyContainer {
    flex: 2;
    alignItems: 'flex-start';
    justifyContent: 'flex-end';
    paddingLeft: 25;
    marginBottom: 40
  }
.title {
    fontSize: 48;
    color: '#fff'
  }
.subtitle {
    fontSize: 24;
    color: '#fff'
  }