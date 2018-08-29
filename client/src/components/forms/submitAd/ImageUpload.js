import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react'

import 'semantic-ui-css/components/image.min.css';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    }
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    if (this.props.hidden) { return null }

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<Image src={imagePreviewUrl} wrapped bordered size='small'/>);
    }

    return (
      <div className="previewComponent">
        <input className="fileInput"
          type="file"
          onChange={(e)=>this._handleImageChange(e)} />
        {$imagePreview}
        <button className="submitButton"
          type="submit"
          onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
      </div>
    )
  }
}

//ReactDOM.render(<ImageUpload/>, document.getElementById("mainApp"));
export default ImageUpload;
