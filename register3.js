"use strict";
(self["webpackChunkdashboard_t7"] = self["webpackChunkdashboard_t7"] || []).push([
    [854],
    {
        88335: (t, r, o) => {
            o.d(r, { Z: () => u });
            var s = function () {
                    var t = this,
                        r = t._self._c;
                    return r("input", {
                        staticClass: "custom-input",
                        attrs: { type: t.inputType, placeholder: t.inputPlaceholder, name: t.inputName, autocomplete: t.inputName, required: "" },
                        domProps: { value: t.value },
                        on: {
                            input: function (r) {
                                return t.$emit("input", r.target.value);
                            },
                        },
                    });
                },
                e = [];
            const a = {
                    name: "CustomInput",
                    components: {},
                    props: { value: { type: String, required: !0 }, inputType: { type: String, required: !0 }, inputPlaceholder: { type: String, required: !1 }, inputName: { type: String, required: !1 } },
                    data: function () {
                        return {};
                    },
                },
                n = a;
            var i = o(1001),
                l = (0, i.Z)(n, s, e, !1, null, "2efd082b", null);
            const u = l.exports;
        },
        69854: (t, r, o) => {
            o.r(r), o.d(r, { default: () => p });
            var s = function () {
                    var t = this,
                        r = t._self._c;
                    return r("div", { staticClass: "body__form--content" }, [
                        t._m(0),
                        r("div", { staticClass: "body__form--title", domProps: { textContent: t._s(t.$ml.get("Form_TxtWelcome")) } }),
                        r("div", { staticClass: "body__form--subtitle", domProps: { textContent: t._s(t.$ml.get("Form_TxtLoginTitle")) } }),
                        r(
                            "form",
                            {
                                staticClass: "body__forma login-form",
                                on: {
                                    submit: function (r) {
                                        return r.preventDefault(), t.login.apply(null, arguments);
                                    },
                                },
                            },
                            [
                                r("CustomInput", {
                                    staticClass: "body__form--input",
                                    attrs: { inputType: "email", inputPlaceholder: t.$ml.get("Form_TxtEmail") },
                                    model: {
                                        value: t.email,
                                        callback: function (r) {
                                            t.email = r;
                                        },
                                        expression: "email",
                                    },
                                }),
                                r("CustomInput", {
                                    staticClass: "body__form--input password-input",
                                    attrs: { inputType: "password", inputPlaceholder: t.$ml.get("Form_TxtPassword") },
                                    scopedSlots: t._u([
                                        {
                                            key: "extra",
                                            fn: function () {
                                                return [r("router-link", { staticClass: "body__form--label-forgot", attrs: { to: "/restore-password" }, domProps: { textContent: t._s(t.$ml.get("Form_TxtForgotPassword")) } })];
                                            },
                                            proxy: !0,
                                        },
                                    ]),
                                    model: {
                                        value: t.password,
                                        callback: function (r) {
                                            t.password = r;
                                        },
                                        expression: "password",
                                    },
                                }),
                                r("div", { directives: [{ name: "show", rawName: "v-show", value: t.showPwdError, expression: "showPwdError" }], staticClass: "form__error" }, [
                                    r("img", { staticClass: "form__error--icon", attrs: { src: o(72662), alt: "" } }),
                                    r("div", { staticClass: "form__error--text", domProps: { textContent: t._s(t.$ml.get("Form_TxtLoginError")) } }),
                                ]),
                                r(
                                    "div",
                                    { staticClass: "form__forgot-password" },
                                    [r("router-link", { staticClass: "form__forgot-link", attrs: { to: "/restore" }, domProps: { textContent: t._s(t.$ml.get("Form_TxtForgotPassword")) } })],
                                    1
                                ),
                                r("button", { staticClass: "body__form--btn", attrs: { type: "submit" }, domProps: { textContent: t._s(t.$ml.get("Form_BtnLogin")) } }),
                            ],
                            1
                        ),
                        r("div", { staticClass: "form__create" }, [
                            r(
                                "div",
                                { staticClass: "form__create--text" },
                                [
                                    r("span", { domProps: { textContent: t._s(t.$ml.get("Form_TxtNew")) } }),
                                    r("br"),
                                    r("router-link", { staticClass: "body__form--label-forgot", attrs: { to: "/registration" }, domProps: { textContent: t._s(t.$ml.get("Form_TxtCreateAccount")) } }),
                                ],
                                1
                            ),
                        ]),
                    ]);
                },
                e = [
                    function () {
                        var t = this,
                            r = t._self._c;
                        return r("div", { staticClass: "body__form--header" }, [r("img", { staticClass: "body__form--logo", attrs: { src: o(58655), alt: "T7 - dashboard" } })]);
                    },
                ],
                a = o(50124),
                n = o(48534),
                i = o(88335);
            const l = {
                    components: { CustomInput: i.Z },
                    name: "LoginPage",
                    data: function () {
                        return { email: "", password: "", showPwdError: !1 };
                    },
                    methods: {
                        login: function () {
                            var t = this;
                            return (0, n.Z)(
                                (0, a.Z)().mark(function r() {
                                    var o;
                                    return (0, a.Z)().wrap(function (r) {
                                        while (1)
                                            switch ((r.prev = r.next)) {
                                                case 0:
                                                    console.log('dispatch true on force');
                                                    return (r.next = 2), t.$store.dispatch("auth/login", { email: t.email, password: t.password, force: true });
                                                case 2:
                                                    (o = r.sent), o.success && ((t.showPwdError = !1), t.$router.push("/")), o.success || "Password or email is incorrect" !== o.msg || (t.showPwdError = !0);
                                                case 5:
                                                case "end":
                                                    return r.stop();
                                            }
                                    }, r);
                                })
                            )();
                        },
                    },
                },
                u = l;
            var m = o(1001),
                c = (0, m.Z)(u, s, e, !1, null, null, null);
            const p = c.exports;
        },
        58655: (t, r, o) => {
            t.exports = o.p + "img/main-signin-icon-1.08907fa7.png";
        },
    },
]);
