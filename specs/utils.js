export function pressIfPresent(spec, buttonIdentifier) {
    spec.findComponent(buttonIdentifier).then(() => {
        return spec.press(buttonIdentifier);
    }).catch(() => null);
}