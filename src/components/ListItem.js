import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View, LayoutAnimation} from 'react-native';
import {connect} from 'react-redux'
import {CardSection} from './common';
import * as actions from '../actions';

class ListItem extends Component{
	componentWillUpdate(){
		LayoutAnimation.spring();
	}
	renderDescription(){
		const {Library, expanded} = this.props;

		if(expanded){
			return(
					<CardSection>
						<Text style={{flex: 1}} >
							{Library.description}
						</Text>
					</CardSection>
				);
		}
	}
	render(){
		const {titleStyle} = styles;
		///
		const {id, title} = this.props.Library;
		return(
			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text style={titleStyle} >
							{title}
						</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
			);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
}

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.Library.id
	//expa: expa = {expa}
	return {expanded}
};
//cuando es llamado el action es enviado a todos los reducers
//el ListItem pasa su propia libreria
export default connect(mapStateToProps, actions)(ListItem);