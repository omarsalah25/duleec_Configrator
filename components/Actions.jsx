import axios from 'axios'
import { useCallback } from 'react'
import Swal from 'sweetalert2'

const Actions = ({ currentVehicle, savedVehicles, setSavedVehicles }) => {
    // Save current vehicle to local storage.
    // const saveVehicle = () => {
    //     // Get the name of the existing vehicle, if available.
    //     const vehicleName = savedVehicles.current ? savedVehicles[savedVehicles.current]?.name : ''

    //     // Prompt the user for a name for their vehicle.
    //     Swal.fire({
    //         title: 'Save Your Vehicle',
    //         text: 'Enter a name for your vehicle:',
    //         input: 'text',
    //         inputValue: vehicleName,
    //         showCancelButton: true,
    //         confirmButtonText: 'Submit',
    //         cancelButtonText: 'Cancel',
    //     }).then((result) => {
    //         if (result.isDismissed) {
    //             return
    //         }

    //         // Get submitted vehicle name.
    //         const name = result.value

    //         // No name provided.
    //         if (!name) {
    //             Swal.fire('Error', 'Please enter a name for your vehicle.', 'error')
    //             return
    //         }

    //         // Check if we are updating an existing vehicle or saving a new one.
    //         // If the name has been changed, save as a new vehicle.
    //         const vehicleId = savedVehicles.current && name === vehicleName ? savedVehicles.current : Date.now()

    //         // Create an object to represent the vehicle.
    //         const vehicle = {
    //             name: name,
    //             config: currentVehicle,
    //         }

    //         // Save the vehicle to local storage and set current.
    //         const newSavedVehicles = {
    //             ...savedVehicles,
    //             current: vehicleId,
    //             [vehicleId]: vehicle,
    //         }
    //         setSavedVehicles(newSavedVehicles)

    //         // Notify the user that the vehicle has been saved.
    //         Swal.fire('Saved!', 'Your vehicle has been saved.', 'success')
    //     })
    // }


    // Share current config.
    const shareVehicle = useCallback(async () => {


        // Generate shareable URL.
        const jsonString = JSON.stringify(currentVehicle)
        const encodedConfig = encodeURIComponent(jsonString)
        const shareableUrl = `${window.location.origin}?config=${encodedConfig}`
        // Notify user with the link element and copy button.
        const { value: formValues } = await Swal.fire({
            title: 'Submit your Creation',
            html:
                '<label for="name">Name</label><br>' +
                '<input id="name"  class="swal2-input"><br>' +
                '<label for="email">Email</label><br>' +

                '<input id="email"  class="swal2-input"><br>' +
                '<label for="phone">Phone</label><br>' +

                '<input id="phone"  class="swal2-input"><br>',
            focusConfirm: false,
            preConfirm: () => {
                let name = document.getElementById('name').value;
                let email = document.getElementById('email').value;
                let phone = document.getElementById('phone').value;
                let url = shareableUrl;
                return [
                    name,
                    email,
                    phone,
                    url

                ]
            }
        })

        if (formValues) {

            await axios.post('https://podia.crowddigital.agency/api/send/email', {
                name: formValues[0],
                email: formValues[1],
                phone: formValues[2],
                url: formValues[3]

            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'

                }
            })

            Swal.fire(
                'Masterpiece Has Been Submitted ! ',
                '',
                'success'
            )

        }
        else {
            Swal.fire(
                'something went wrong !',
                '',
                'error')
        }
    }, [currentVehicle])

    // Trigger screenshot.
    const takeScreenshot = () => {
        window.dispatchEvent(new Event('takeScreenshot'))
    }

    return (
        <div id='actions'>

            {/* <button onClick={saveVehicle}>Save</button> */}
            <button onClick={shareVehicle}>Submit</button>
            <button onClick={takeScreenshot}>Screenshot</button>
        </div>
    )

}

export default Actions
