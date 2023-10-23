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
    const GroupedSelect = ({ value, itemList, groupBy, ...restProps }) => {
        // Get list sorted by type.
        const groupedList = groupObjectByKey(itemList, groupBy)

        return (
            <select value={value || ''} {...restProps}>
                {Object.keys(groupedList).map((type) => (
                    <optgroup key={type} label={type}>
                        {groupedList[type].map((id) => (
                            <option key={id} value={id}>
                                {itemList[id].name}
                            </option>
                        ))}
                    </optgroup>
                ))}
            </select>
        )
    }

    return (
        <div id='editor' className={isActive ? 'visible' : ''}>
            <EditorSection title='lighting' icon={<LightIcon className='icon' />} defaultActive={true}>
                <div className='field field-vehicle'>
                    <label>Product</label>
                    <GroupedSelect value={currentVehicle.id} itemList={vehicleConfigs.vehicles} groupBy={'make'} onChange={(e) => setVehicle({ id: e.target.value })} />
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
