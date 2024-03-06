const { randomBytes } = await import('node:crypto')

// Type was inferred
export const serializeNonPOJOs = (/** @type {any} */ obj) => {
    return structuredClone(obj)
};

export const generateUsername = (/** @type {string | any[]} */ name) => {
    const id = randomBytes(2).toString('hex')
    if (name.length > 3 ) {
        return `${name.slice(0, 5)}${id}`
    } else {
        return `${name}${id}`
    }
}

export const getImageURL = (/** @type {any} */ collectionId, /** @type {any} */ recordId, /** @type {any} */ fileName, size = '0x0') => {
    return `https://base.astralta.com:443/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};

