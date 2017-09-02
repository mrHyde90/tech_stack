import React, {Component} from 'react';
import {ListView} from 'react-native'
import {connect} from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component{

componentWillMount(){
	const ds = new ListView.DataSource({
		rowHasChanged: (r1, r2) => r1 !== r2
	});
	//pone los datos
	this.dataSource = ds.cloneWithRows(this.props.Libraries);
}

renderRow(Library){
	return <ListItem Library={Library} />
}

	render(){

		return(
			<ListView 
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/> 
			);
	}
}
//lo que se regresa de esa funcion son las propiedades en el libraryList ///

const mapStateToProps = state => {
	return {Libraries:  state.Libraries};
};
///
export default connect(mapStateToProps)(LibraryList);
//lo que hace eel connect es como el dispatch