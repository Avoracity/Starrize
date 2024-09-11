# starrize


## development commands

npm run android : start emulator and application ( initiates expo start and metro bundler)

---

## libraries and typescript notes

StackNavigator : a React Navigation library  for the use of receiving props between screens and allow navigation between screens using a stack Data Structure

props in StackNavigator : due to the nature of typescript, it is required to define the type that is being passed to the Navigator Function.
Thus, for all screens the following structure is devised.

1) Define Prop and it's Data Type
2) Define a const function that receives a prop
3) Define the screen functionality within the const function

```

Example:
    type Props = {
        navigation: NativeStackNavigationProp<number, 'Func'>; 
         // any is the type of the param list
        // 'Func' is the name to identify the navigation stack that is being worked on
     };
    const FuncScreen: React.FC<Props> = ({ Auth }) => {return(...);};
    
    const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    });

    export default FuncScreen;

```

## how to track time
within the /server/ folder run 
node ActiveWindow.js      to start tracking

# server troubleshooting
Ensure CORS is enabled

# Update Naming Convention

Major  x.0.0
    Introduces new features that changes how the existing ones work. 

Minor  0.x.0
    new and additional features and/or improvements that does not change existing functionalities (backward-compatible)

Patch 0.0.x
    significant bug fixes

