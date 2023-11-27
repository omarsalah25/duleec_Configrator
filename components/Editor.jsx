import React from 'react'

import vehicleConfigs from '../vehicleConfigs'
import EditorSection from './EditorSection'

import { ReactComponent as LightIcon } from '../assets/images/icons/Light-stand.svg'
import { ReactComponent as EditIcon } from '../assets/images/icons/edit.svg'
import { ReactComponent as GearIcon } from '../assets/images/icons/Gear.svg'

function Editor(props) {
    // Get props.
    const { isActive, currentVehicle = { id: null }, setVehicle, cameraAutoRotate, setCameraAutoRotate } = props

    // Check if current vehicle has addons.
    function addonsExist() {
        return currentVehicle.id && Object.keys(vehicleConfigs.vehicles[currentVehicle.id].addons).length > 0 ? true : false
    }

    // Group object by key.
    const groupObjectByKey = (object, key) => {
        const groups = {}
        // Loop through object keys.
        for (const id of Object.keys(object)) {
            const type = object[id][key]
            // Create group key if doesnt exist.
            if (!groups[type]) groups[type] = []
            // Push item to group.
            groups[type].push(id)
        }
        return groups
    }

    // Select list grouped by provided type.
    const GroupedCheckbox = ({ value, itemList, groupBy, onChange }) => {


        const handleCheckboxChange = (selectedValue) => {
            // Implement your logic to handle checkbox changes here
            // For instance, updating the selected values
            onChange(selectedValue);
        };

        const groupedList = groupObjectByKey(itemList, groupBy);

        return (
            <div className="grouped-checkboxes">
                {Object.keys(groupedList).map((type) => (
                    <div key={type} className="group" style={{ textAlign: 'center', padding: '0 10%' }}>
                        <h2 className='group-label'>{type}</h2>
                        <hr></hr>
                        <div className='checkbox-wrapper-16'>

                            {groupedList[type].map((item) => (
                                <label key={itemList[item].name} className="checkbox-wrapper">
                                    <input
                                        type="checkbox"
                                        className="checkbox-input"
                                        value={itemList[item].name}
                                        checked={value.includes(itemList[item].name)}
                                        onChange={(e) => {
                                            const isChecked = e.target.checked;
                                            const selectedId = itemList[item].name;
                                            const updatedValue = isChecked
                                                ? [selectedId]
                                                : value.filter((name) => name === selectedId);
                                            handleCheckboxChange(updatedValue);
                                        }}
                                    />
                                    <span className="checkbox-tile" style={{ backgroundImage: `url(${itemList[item].imageUrl})` }}>
                                        <span className="checkbox-label">{itemList[item].name}
                                        </span>
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div id='editor' className={isActive ? 'visible' : ''}>
            <EditorSection title='lighting' icon={<LightIcon className='icon' />} >
                <div className='field field-vehicle'>
                    <GroupedCheckbox value={currentVehicle.id} itemList={vehicleConfigs.vehicles} groupBy={'make'} onChange={(e) => {
                        setVehicle({ id: e[0] })
                        // console.log(e[0])
                    }} />
                </div>
            </EditorSection>

            {/* Addons */}
            {addonsExist() && (
                <EditorSection title='Addons' icon={<EditIcon className='icon' />}>
                    {Object.keys(vehicleConfigs.vehicles[currentVehicle.id].addons).map((addon) => (
                        <div key={addon} className={`field field-${addon}`}>
                            <label>{vehicleConfigs.vehicles[currentVehicle.id].addons[addon].name}</label>
                            <select value={currentVehicle.addons[addon]} required onChange={(e) => setVehicle({ addons: { ...currentVehicle.addons, [addon]: e.target.value } })}>
                                {!vehicleConfigs.vehicles[currentVehicle.id].addons[addon].required && <option value=''>None</option>}
                                {Object.keys(vehicleConfigs.vehicles[currentVehicle.id].addons[addon].options).map((option) => (
                                    <option key={option} value={option}>
                                        {vehicleConfigs.vehicles[currentVehicle.id].addons[addon].options[option].name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ))}
                </EditorSection>
            )}

            {/* Scene */}
            <EditorSection title='Options' icon={<GearIcon className='icon' />}>
                {/* Auto Rotate */}
                <div className='field field-camera-autorotate'>
                    <input type='checkbox' id='camera-autorotate' checked={cameraAutoRotate} onChange={(e) => setCameraAutoRotate(e.target.checked)} />
                    <label htmlFor='camera-autorotate'>Auto Rotate</label>
                </div>
            </EditorSection>
        </div>
    )
}

export default Editor
