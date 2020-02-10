import AsyncStorage from '@react-native-community/async-storage';

class Storage {

    static save(key, obj) {
        return AsyncStorage.setItem(key, JSON.stringify(obj))
    }

    static get(key) {
        return new Promise(async (resolve) => {
            const result = JSON.parse(await AsyncStorage.getItem(key))
            resolve(result);
        })
    }

    static remove(key) {
        return AsyncStorage.removeItem(key)
    }

    static clear() {
        return AsyncStorage.clear()
    }
}

export { Storage };
