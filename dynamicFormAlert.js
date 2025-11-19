function dynamicFormAlert(executionContext, alertFieldNames, alertType){
    var warningId = "alert"; // Generic ID for the alert

    var formContext = executionContext.getFormContext(); // Read object for form context

    // Convert the comma-separated field names into an array
    var fieldsToCheck = alertFieldNames.split(",").map(function(field) {
        return field.trim(); // Trim whitespace from field names
    });

    // Check if the form is in update mode
    if (formContext.ui.getFormType() === 2)
    {
        // Check each field and show alert if any field has content
        fieldsToCheck.forEach(function(fieldName) {
            var alertValue = formContext.getAttribute(fieldName).getValue();

            if (alertValue !== null) {
                formContext.ui.setFormNotification(alertValue, alertType.toUpperCase(), warningId);
                return; // Exit the loop after displaying the first alert
            }
        });
    }
    
    // Clear alert if no fields contain alert messages
    var allFieldsEmpty = fieldsToCheck.every(function(fieldName) {
        var fieldValue = formContext.getAttribute(fieldName).getValue();
        return fieldValue === null;
    });

    if (allFieldsEmpty){
        formContext.ui.clearFormNotification(warningId);
    }
}
