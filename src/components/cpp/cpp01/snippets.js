export let code01 = `
template <typename T>
struct Echo {
    using type = T;
};
`;

export let code02 = `
template <typename T>
struct TheAnswer {
    static constexpr int value = 42;
};
`;

export let code03 = `
int int_identity(int x) {
    return x;
}
assert(42 == int_identity(42));
`;

export let code04 = `
template <int X>
struct IntIdentity {
    static constexpr int value = X;
}
static_assert(42 == IntIdentity<42>::value);
`;

export let code05 = `
template <typename T>
T identity(T x) {
    return x;
}
// Returned type will be int
assert(42 == identity(42));

// Returned type will be unsigned long long
assert(42ul == identity(42ull));
`;

export let code06 = `
template <typename T, T Value>
struct ValueIdentity {
    static constexpr T value = Value;
}
// The type of value will be int
static_assert(42 == ValueIdentity<int, 42>::value);

// The type of value will be unsigned long long
static_assert(ValueIdentity<unsigned long long, 42ull>::value == 42ull);
`;

export let code07 = `
template <auto X>
struct ValueIdentity {
    static constexpr auto value = X;
}
// The type of value will be int
static_assert(42 == ValueIdentity<42>::value);

// The type of value will be unsigned long long
static_assert(42ull == ValueIdentity<42ull>::value);
`;
