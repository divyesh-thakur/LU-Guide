import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function Profile() {
  const [expandedId, setExpandedId] = useState(null);
  const faqs = [
    {
      id: "1",
      question: "How do I navigate the campus using the app?",
      answer:
        "The app includes an interactive campus map that allows you to find buildings, lecture halls, libraries, and other facilities. You can use the search function to locate specific places on campus.",
    },
    {
      id: "2",
      question: "How can I explore nearby visitor attractions?",
      answer:
        "The app has a Visitor Attractions section that lists popular places to visit near the university. This includes parks, museums, restaurants, and other points of interest.",
    },
    {
      id: "3",
      question:
        "How can I find out about student services available at Laurentian University?",
      answer:
        "The Services section of the app provides information on a wide range of services available to students, including counseling, health services, career advice, and more.",
    },
    {
      id: "4",
      question: "Can I use the Laurentian Guide app offline?",
      answer:
        "Some features of the app, like the places info and basic information about the university, are available offline. However, for the most current information, live location and updates, an internet connection is recommended.",
    },
    {
      id: "5",
      question: "Does the app provide information about university events?",
      answer:
        "No, the Events section of the app lists upcoming university events, including academic seminars, cultural festivals, sports events, and more. But in furture versions we will try to implement it.",
    },
    // Add more FAQs here
  ];

  const FAQItem = ({ item, onPress, expanded }) => (
    <View style={styles.faqItem}>
      <TouchableOpacity onPress={onPress} style={styles.questionContainer}>
        <Text style={styles.question}>{item.question}</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.answerContainer}>
          <Text style={styles.answer}>{item.answer}</Text>
        </View>
      )}
    </View>
  );

  const handlePress = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderItem = ({ item }) => (
    <FAQItem
      item={item}
      onPress={() => handlePress(item.id)}
      expanded={item.id === expandedId}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>FAQ's</Text>
      <FlatList
        data={faqs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.faqList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  header: {
    fontSize: 35,
    fontWeight: "600",
    color: "#012B57",
  },
  faqList: {
    padding: 20,
  },
  faqItem: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  questionContainer: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
  },
  answerContainer: {
    marginTop: 10,
    padding: 10,
  },
  answer: {
    fontSize: 18,
  },
});
