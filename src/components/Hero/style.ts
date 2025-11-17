import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  titleLogo: {
    width: '80%',
    height: 100,
    marginBottom: 10,
  },
  movieInfo: {
    color: 'white',
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    justifyContent: 'space-around',
  },
  playButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  playButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  myListButton: {
    backgroundColor: 'rgba(128,128,128,0.5)',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  myListButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  cardContainer: {
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 15,
    overflow: 'hidden',
    height: 450,
  },
});