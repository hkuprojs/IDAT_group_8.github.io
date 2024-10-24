import React, { Component } from 'react';

export class Calc extends Component {
    constructor() {
        super();
        this.state = {
            image: null,
            fileName: 'No file chosen'
        };
    }

    handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            this.setState({ 
                image: URL.createObjectURL(file),
                fileName: file.name
            });
        }
    }

    render() {
        return (
            <div className="h-full w-full bg-gray-800 text-white p-4 flex flex-col items-center justify-center">
                <h1 className="text-2xl mb-4">Image Upload Tool</h1>
                <label className="mb-4 p-2 border border-gray-500 rounded cursor-pointer bg-gray-700 hover:bg-gray-600">
                    Choose File
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={this.handleImageUpload} 
                        className="hidden"
                    />
                </label>
                <span className="text-sm">{this.state.fileName}</span>
                {this.state.image && (
                    <div className="mt-4">
                        <img 
                            src={this.state.image} 
                            alt="Uploaded" 
                            className="max-w-full max-h-96 border border-gray-500 rounded"
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default Calc;

export const displayTerminalCalc = (addFolder, openApp) => {
    return <Calc addFolder={addFolder} openApp={openApp}> </Calc>;
}
