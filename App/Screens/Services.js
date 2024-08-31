import {
  View,
  Text,
  Image,
  Button,
  Pressable,
  StyleSheet,
  Linking,
  ScrollView,
} from "react-native";
import React from "react";

export default function Services() {
  function DownloadContact() {
    const url = "https://laurentian.ca/help";
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err)
    );
  }
  return (
    <ScrollView>
      <View style={{ marginTop: 50 }}>
        <View
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            height: 40,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "600" }}>Services</Text>
        </View>

        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              borderWidth: 2,
              padding: 10,
              borderRadius: 5,
              backgroundColor: "#012B57",
              color: "white",
              borderColor: "white",
            }}
          >
            Helpful Contacts
          </Text>
        </View>
        <View style={{ maxHeight: "60%" }}>
          <View
            style={{
              backgroundColor: "#012B57",
              marginTop: 10,
              color: "white",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                marginTop: 10,
                fontSize: 28,
                fontWeight: 600,
                color: "white",
              }}
            >
              CAMPUS SECURITY
            </Text>
            <View style={{ marginTop: 28 }}>
              <Text
                style={{ color: "white", fontSize: 30, textAlign: "center" }}
              >
                705-675-6562 or ext 6562
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 25,
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                Click here for more information about Campus Security
              </Text>
            </View>
            <View
              style={{
                marginTop: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Pressable style={styles.button} onPress={DownloadContact}>
                <Text style={styles.text}>Download Contact</Text>
              </Pressable>
            </View>
          </View>
        </View>
        {/* ///////////----------PORTER NUMBER---------///////////// */}
        <View style={{ maxHeight: "60%" }}>
          <View
            style={{
              backgroundColor: "#012B57",
              marginTop: 10,
              color: "white",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                marginTop: 10,
                fontSize: 28,
                fontWeight: 600,
                color: "white",
              }}
            >
              ACCESSIBILITY SERVICES
            </Text>
            <View style={{ marginTop: 28 }}>
              <Text
                style={{ color: "white", fontSize: 30, textAlign: "center" }}
              >
                705-675-1151 or ext 3324
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  textAlign: "center",
                  marginTop: 2,
                }}
              >
                accessibilityservicesinfo@laurentain.ca
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 25,
                  textAlign: "center",
                  marginTop: 10,
                }}
              >
                P-230 Parker Building
              </Text>
            </View>
            <View
              style={{
                marginTop: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Pressable style={styles.button} onPress={DownloadContact}>
                <Text style={styles.text}>Download Contact</Text>
              </Pressable>
            </View>
          </View>
        </View>
        {/* ///////////----------Health and Welllness---------///////////// */}
        <View style={{ maxHeight: "60%" }}>
          <View
            style={{
              backgroundColor: "#012B57",
              marginTop: 10,
              color: "white",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                marginTop: 10,
                fontSize: 28,
                fontWeight: 600,
                color: "white",
              }}
            >
              HEALTH AND WELLNESS
            </Text>
            <View style={{ marginTop: 28 }}>
              <Text
                style={{ color: "white", fontSize: 30, textAlign: "center" }}
              >
                705-675-6546
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  textAlign: "center",
                  marginTop: 2,
                }}
              >
                healthservices@laurentain.ca
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 25,
                  textAlign: "center",
                  marginTop: 10,
                }}
              >
                Single Student Residence - Room G-23
              </Text>
            </View>
            <View
              style={{
                marginTop: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Pressable style={styles.button} onPress={DownloadContact}>
                <Text style={styles.text}>Download Contact</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
    width: "60%",
    height: 45,
  },
  text: {
    fontSize: 22,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  stickyBar: {
    backgroundColor: "lightblue",
    padding: 10,
  },
  stickyText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
