import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader';
export default class BookRequestScreen extends React.Component{
    constructor(){
        super();
        this.state={
            userId:firebase.auth().currentUser.email,
            bookName:'',
            reasonToRequest:'',
        }
    }
    render(){
        return(
            <View style={{flex:1}}>
              <MyHeader title="request book"/>
              <KeyboardAvoidingView>
                  <TextInput
                  style={styles.formTextInput}
                  placeholder={"enter book name"}
                  onChangeText={(text) =>{
                      this.setState({
                          bookName:text,
                      })
                  }}
                  value={this.state.bookName}
                  />
                     <TextInput
                  style={styles.formTextInput}
                  placeholder={"Why do you need this book?"}
                  multiline
                  numberOfLines={8}
                  onChangeText={(text) =>{
                      this.setState({
                          reasonToRequest:text,
                      })
                  }}
                  value={this.state.reasonToRequest}
                  />
                  <TouchableOpacity style={styles.button} onPress={}>
                      <Text>REQUEST</Text>
                  </TouchableOpacity>
              </KeyboardAvoidingView>
                </View>
        )
    }
}